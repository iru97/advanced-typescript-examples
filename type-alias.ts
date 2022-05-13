// Type Alias

export type ConversationStatus = 'PENDING' | 'READ' | 'RESOLVED';

function onChangeStatus(newStatus: string) {
    // const statusCopy: ConversationStatus = newStatus;
}

function getNewStatus(): ConversationStatus {
    return 'READ'
}