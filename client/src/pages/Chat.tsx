import ChatItem from "../components/ChatItem"
import NavBar from "../components/NavBar"
import { Card, CardHeader, CardBody, } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import SendIcon from '@mui/icons-material/Send';



const chats = [{
  id:1,
  role: 'assistant' ,
  content: 'ffffff',

},
{
  id:2,
  role: 'user',
  content: 'jjhhhjhhhd',

},
{
  id:3,
  role: 'assistant' ,
  content: 'jjhhhjhhhd',

},
{
  id:4,
  role: 'assistant' ,
  content: 'jjhhhjhhhd',

},
{ 
  id:5,
  role:'assistant'  ,
  content: 'jjhhhjhhhd',

},
{
  id:6,
  role: 'assistant' ,
  content: 'jjhhhjhhhd',

},
{
  id:7,
  role: 'assistant' ,
  content: 'jjhhhjhhhd',

},
{
  id:8,
  role: 'assistant' ,
  content: 'jjhhhjhhhd',

},
{
  id:9,
  role: 'user',
  content: 'jjhhhjhhhd',

}
]


export default function Chat() {
  return (
    <div className="bg-black overflow-hidden">

      <NavBar />

      <div className="flex p-10 gap-10 items-center">
        <div className="w-[30%]">
          <Card className="py-4 p-8">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start mt-4">
              <Avatar className="flex justify-center mx-auto" name="Junior" />
              <p className=" uppercase font-bold mt-9 mx-auto">You are talking to a chat Boot</p>

            </CardHeader>
            <CardBody className="overflow-visible py-2 mt-7">
              <p className="mx-auto"> You can ask questions related to programming, debugging, and fixing errors, but please avoid sharing personal information</p>
            </CardBody>
            <Button  className="mt-[120px] mb-7 bg-red-600">
              Clear Conversations
            </Button>
          </Card>


        </div>
        <div className="w-[70%] flex flex-col justify-evenly gap-10">
        <div className="overflow-y-auto h-96">
            {chats.map((chat) => (
              <ChatItem key={chat.id} content={chat.content} role={chat.role} />
            ))}
          </div>
          <Input
            type="text"
            className="space-y-1 mt-6  bottom-0 py-3"
            placeholder="message MelKa-GPT ..."
            labelPlacement="outside"
            endContent={
              <SendIcon className="cursor-pointer" />
            }
          />

        
        </div>

      </div>
    </div>
  )
}
