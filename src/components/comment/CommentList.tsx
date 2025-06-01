
import React from 'react';
import CommentItem from './CommentItem';
import { Comment } from '@/types/podcast';

interface CommentListProps {
  comments: Comment[];
  loading: boolean;
}

const CommentList: React.FC<CommentListProps> = ({ comments, loading }) => {
  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-podcast-accent"></div>
        <p className="mt-2 text-podcast-secondary">جاري تحميل التعليقات...</p>
      </div>
    );
  }

  if (comments.length === 0) {
    return (
      <div className="text-center py-8 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <p className="text-podcast-secondary">لا توجد تعليقات بعد. كن أول من يعلق!</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;
