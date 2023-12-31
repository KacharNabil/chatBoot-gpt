import home from '../assets/home.json'
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useRef } from "react";
import { Button, Avatar, AvatarGroup } from "@nextui-org/react";
import { Link } from 'react-router-dom';



export default function Hero() {
    const homeRef = useRef<LottieRefCurrentProps>(null);

    return (
        <div className='z-10'>
            <div className="hero min-h-screen bg-base-400">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <Lottie

                        onComplete={() => {
                            homeRef.current?.goToAndPlay(20, true)
                        }

                        }
                        loop={false}
                        lottieRef={homeRef}
                        animationData={home} />
                    <div>
                        <h1 className="text-6xl font-bold">Meet your AI  companion</h1>
                        <p className="py-6 text-3xl font-semibold">Empowering businesses to deliver exceptional service effortlessly.</p>
                        <div className='flex justify-start mt-4'>
                            
                        <AvatarGroup isBordered max={3} total={10}>
                            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                            <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
                            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
                        </AvatarGroup>
                        </div>
                        
                        <div className='flex justify-start mt-10'>
                            <Link to='/register'>
                            <Button className="text-white font-semibold  bg-blue-600 mr-8" radius="sm" href="/register" variant="flat">Get in Touch</Button>
                            </Link>
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
