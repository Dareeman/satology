import React, { useState } from "react";
import { getAddress } from "sats-connect"
import { Connect } from "../../components/Connect/";
import { Success } from "../Success";

export const Wallet = () => {
    const [isConnected, setIsConnected] = useState(false);

    // for xverse
    const networkType = 'Testnet';

    const getAddressOptions = {
        payload: {
            purposes: ['ordinals', 'payment'],
            message: 'Address for bidding',
            network: {
                type: networkType,
            },
        },
        onFinish: async (response) => {

            // Send the address to the server
            console.log("Connected:", response);
            setIsConnected(true);
        },
        onCancel: () => alert('Request canceled'),
    };

    const handleWallet = async () => {
        try {
            await getAddress(getAddressOptions);
        } catch (e) {
            console.error(`Error connecting with Xverse: ${e}`);
        }
    };

    return (
        <div className="bg-switch w-full bg-cover bg-top md:min-w-[2500px]">
            <div className="flex justify-center items-center w-full min-h-screen">
                {
                    isConnected ? (
                        <Success />
                    ) : (
                        <div className="flex flex-col justify-center items-center max-w-[500px] mx-auto my-auto p-8">
                            <h1 className="[font-family:'Righteous',Helvetica] font-normal text-white text-[26px] leading-[normal]">Satology Early Access WaitList</h1>
                            <p className="[font-family:'Poppins',Helvetica] font-normal text-white text-[18px] leading-[28px] mt-6">
                                Answering the next few questions will provide us with the information we need to give you early access to the platform.<br /><br />
                                We respect your privacy and we'll never share or sell your data.By accepting to continue, you agree to our Privacy Policy, as well as our Terms of Service.Click the button below to connect your wallet.
                            </p>
                            <div className="mt-12">
                                <Connect className="w-full h-20 xl:ml-14 2xl:ml-0" size="m" state="default" handleWallet={handleWallet} />
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};