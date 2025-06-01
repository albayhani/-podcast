
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useToast } from '@/hooks/use-toast';

interface CommentFormProps {
  episodeId: string;
  onCommentAdded: () => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ episodeId, onCommentAdded }) => {
  const [newComment, setNewComment] = useState('');
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newComment.trim() || !userName.trim()) {
      toast({
        title: 'تنبيه',
        description: 'يرجى إدخال اسمك والتعليق',
        variant: 'destructive',
      });
      return;
    }

    try {
      setLoading(true);
      const commentData = {
        episodeId,
        userName,
        content: newComment,
        timestamp: serverTimestamp(),
        likes: 0
      };

      await addDoc(collection(db, 'comments'), commentData);
      
      toast({
        title: 'تم بنجاح',
        description: 'تمت إضافة تعليقك بنجاح',
      });
      
      setNewComment('');
      onCommentAdded(); // Notify parent to refresh comments
    } catch (error) {
      console.error('Error adding comment:', error);
      toast({
        title: 'خطأ',
        description: 'حدث خطأ أثناء إضافة التعليق',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmitComment} className="mb-8">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-podcast-secondary mb-1">
          الاسم
        </label>
        <input
          type="text"
          id="name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="w-full border-gray-300 rounded-md p-2 focus:ring-podcast-accent focus:border-podcast-accent bg-white dark:bg-gray-800"
          placeholder="أدخل اسمك"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="comment" className="block text-sm font-medium text-podcast-secondary mb-1">
          التعليق
        </label>
        <Textarea
          id="comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full min-h-24"
          placeholder="اكتب تعليقك هنا..."
          required
        />
      </div>
      <Button type="submit" disabled={loading} className="bg-podcast-primary">
        {loading ? 'جاري الإرسال...' : 'إرسال التعليق'}
      </Button>
    </form>
  );
};

export default CommentForm;
