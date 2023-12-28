import { Card, CardHeader, CardBody, } from "@nextui-org/react";
import SensorsIcon from '@mui/icons-material/Sensors';
import DevicesIcon from '@mui/icons-material/Devices';
import StorageIcon from '@mui/icons-material/Storage';

export default function Features() {
    return (
        <div className="flex justify-between gap-2 p-8 mt-[40px]">
            <Card className="py-4 p-6">
                <CardHeader className="pb-0 pt-2 px-4 flex justify-center items-start">
                    <SensorsIcon fontSize="large" />
                </CardHeader>
                <CardBody className="overflow-visible py-2 text-center">
                Connect to the most powerful AI chatbot
                </CardBody>
            </Card>
            <Card className="py-4 p-6">
                <CardHeader className="pb-0 pt-2 px-4 flex justify-center items-start">
                    <DevicesIcon fontSize="large" />
                </CardHeader>
                <CardBody className="overflow-visible py-2 text-center">
                Connect from your favorite device.
                </CardBody>
            </Card>
            <Card className="py-4 p-6">
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
