export interface InboxPostRaw {
    id: string;
    root?: {
        id: string;
    };
}
export interface InboxChatRaw {
    id: string;
    messages?: Object[];
}

export interface InboxReviewRaw {
    id: string;
    stars?: number;
}

export interface InboxConversation {
    id: string;
    type: ConversationType;
    messages?: Object[];
    post?: Object;
    review?: Object;
}

export type ConversationType = 'POST' | 'CHAT' | 'REVIEW';



export const mapInboxConversationRawToInboxConversation = (
    conversationRaw: InboxChatRaw | InboxPostRaw | InboxReviewRaw
  ): InboxConversation => {
    let review: Object | undefined;
    let post: Object | undefined;
    let messages: Object[] | undefined;

    let type: ConversationType = 'CHAT';
  
    // if (conversationRaw.root?.id) {
    //   post = mapInboxPostRawToInboxPost(conversationRaw.root);
    //   type = 'POST';
    // }
  
    // if (conversationRaw.stars) {
    //   review = mapInboxConversationRawToInboxReview(conversationRaw);
    //   type = 'REVIEW';
    // }
  
    // if (conversationRaw.messages?.length) {
    //   messages = mapMessagesRawToMessages(conversationRaw.messages);
    // }

    if ('root' in conversationRaw) {
      post = mapInboxPostRawToInboxPost(conversationRaw.root);
      type = 'POST';
    }
  
    if ('stars' in conversationRaw) {
      review = mapInboxConversationRawToInboxReview(conversationRaw);
      type = 'REVIEW';
    }
  
    if ('messages' in conversationRaw) {
      messages = mapMessagesRawToMessages(conversationRaw.messages);
    }
  
    return {
      id: conversationRaw.id,
      type,
      messages,
      post,
      review
    };
  };

function mapInboxPostRawToInboxPost(root: { id: string; }): Object {
    throw new Error("Function not implemented.");
}


function mapInboxConversationRawToInboxReview(conversationRaw: InboxReviewRaw): Object {
    throw new Error("Function not implemented.");
}


function mapMessagesRawToMessages(messages: Object[]): Object[] {
    throw new Error("Function not implemented.");
}
