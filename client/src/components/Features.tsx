import { Card, CardHeader, CardBody, } from "@nextui-org/react";
import SensorsIcon from '@mui/icons-material/Sensors';
import DevicesIcon from '@mui/icons-material/Devices';
import StorageIcon from '@mui/icons-material/Storage';

export default function Features() {
    return (
        <div className="flex justify-between gap-2 p-8 mt-[40px] mx-8 relative">
            <div className="absolute top-0  right-0 w-[1000px] h-[400px] bg-blue-300 rounded-full  filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
            
            <Card className=" p-6 bg-purple-800 shadow-2xl transition ease-in-out delay-4000 hover:-translate-y-1 hover:scale-100 duration-100">
                <CardHeader className="pb-0 pt-2 px-4 flex justify-center items-start">
                    <SensorsIcon fontSize="large" />
                </CardHeader>
                <CardBody className="overflow-visible py-2 text-center">
                Connect to the most powerful AI chatbot
                </CardBody>
            </Card>
            <Card className="p-6 bg-purple-800 shadow-2xl transition ease-in-out delay-4000 hover:-translate-y-1 hover:scale-100 duration-100">
                <CardHeader className="pb-0 pt-2 px-4 flex justify-center items-start">
                    <DevicesIcon fontSize="large" />
                </CardHeader>
                <CardBody className="overflow-visible py-2 text-center">
                Connect from your favorite device.
                </CardBody>
            </Card>
            <Card className="p-6 bg-purple-800 shadow-2xl transition ease-in-out delay-4000 hover:-translate-y-1 hover:scale-100 duration-100">
                <CardHeader className="pb-0 pt-2 px-4 flex justify-center items-start">
                    <StorageIcon fontSize="large" />
                </CardHeader>

                <CardBody className="overflow-visible py-2 text-center">
                Resume your conversation at any time
                </CardBody>
            </Card>
        </div>
    )
}
