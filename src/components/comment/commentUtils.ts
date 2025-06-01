
import { collection, getDocs, query, where, orderBy, Timestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Comment } from '@/types/podcast';

export const fetchCommentsForEpisode = async (episodeId: string): Promise<Comment[]> => {
  const commentsQuery = query(
    collection(db, 'comments'),
    where('episodeId', '==', episodeId),
    orderBy('timestamp', 'desc')
  );
  
  const querySnapshot = await getDocs(commentsQuery);
  const fetchedComments: Comment[] = [];
  
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    fetchedComments.push({
      id: doc.id,
      episodeId: data.episodeId,
      userName: data.userName,
      userImage: data.userImage,
      content: data.content,
      timestamp: (data.timestamp as Timestamp).toDate(),
      likes: data.likes || 0
    });
  });

  return fetchedComments;
};
