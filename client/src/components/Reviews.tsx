import {Card, CardHeader, CardBody, CardFooter, Avatar, Button} from "@nextui-org/react";


export default function () {

    return (
    <div className="z-10">
          <Card className="max-w-[340px]">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src="/avatars/avatar-1.png" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">Nabil</h4>
            <h5 className="text-small tracking-tight text-default-400">@Nabil123</h5>
          </div>
        </div>
        <Button
          className={""}
          color="primary"
          radius="full"
          size="sm"
          variant="solid"
        
        >
         Follow
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>
          I used Melka Ai to debug my javaScript code and I find it veru usefull!
        </p>
        <span className="pt-2">
          #FrontendWithZoey 
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">4</p>
          <p className=" text-default-400 text-small">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">97.1K</p>
          <p className="text-default-400 text-small">Followers</p>
        </div>
      </CardFooter>
    </Card>


    </div>
  )
}
