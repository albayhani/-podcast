
import React, { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Comment } from '@/types/podcast';
import CommentForm from './comment/CommentForm';
import CommentList from './comment/CommentList';
import { fetchCommentsForEpisode } from './comment/commentUtils';

interface CommentsProps {
  episodeId: string;
}

const Comments: React.FC<CommentsProps> = ({ episodeId }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loadingComments, setLoadingComments] = useState(true);
  const { toast } = useToast();

  const loadComments = async () => {
    try {
      setLoadingComments(true);
      const fetchedComments = await fetchCommentsForEpisode(episodeId);
      setComments(fetchedComments);
    } catch (error) {
      console.error('Error fetching comments:', error);
      toast({
        title: 'خطأ',
        description: 'حدث خطأ أثناء تحميل التعليقات',
        variant: 'destructive',
      });
    } finally {
      setLoadingComments(false);
    }
  };

  useEffect(() => {
    loadComments();
  }, [episodeId]);

  return (
    <div className="comment-section">
      <h3 className="text-2xl font-bold mb-6">التعليقات</h3>
      <CommentForm episodeId={episodeId} onCommentAdded={loadComments} />
      <CommentList comments={comments} loading={loadingComments} />
    </div>
  );
};

export default Comments;
