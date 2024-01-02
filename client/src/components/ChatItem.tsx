import React from 'react';
import { Avatar } from '@nextui-org/react';



interface ChatItemProps<T> {
  role: 'user' | 'assistant';
  content: string;
}

function ChatItem<T>({ role, content }: ChatItemProps<T>) {
  return (
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
            {role =='user' ? <Avatar className="flex justify-center mx-auto" name="Junior" /> :<img alt="Avatar" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />}
          
        </div>
      </div>
      <div className="chat-header">{role}</div>
      <div className="chat-bubble">{content}</div>
    </div>
  );
}

export default ChatItem;
