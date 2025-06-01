
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Comment } from '@/types/podcast';

interface CommentItemProps {
  comment: Comment;
}

const CommentItem: React.FC<CommentItemProps> = ({ comment }) => {
  function getInitials(name: string) {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  }

  function formatDate(date: Date) {
    return new Intl.DateTimeFormat('ar-SA', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(date);
  }

  return (
    <div className="comment-item">
      <div className="flex items-start space-x-4 rtl:space-x-reverse">
        <Avatar>
          <AvatarImage src={comment.userImage} />
          <AvatarFallback className="bg-podcast-primary text-white">
            {getInitials(comment.userName)}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex justify-between items-center mb-1">
            <h4 className="font-semibold">{comment.userName}</h4>
            <span className="text-sm text-podcast-secondary">
              {formatDate(comment.timestamp)}
            </span>
          </div>
          <p className="text-podcast-dark dark:text-gray-300">
            {comment.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
