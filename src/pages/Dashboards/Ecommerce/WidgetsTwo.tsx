import React from 'react';
import { Package, PackageX, Truck, Wallet2 } from 'lucide-react';
import CountUp from 'react-countup';

const TwooWidgets = () => {
    return (
        <React.Fragment>
            <div className="col-span-12 card md:col-span-6 lg:col-span-6 2xl:col-span-2">
                <div className="text-center card-body">
                    <div className="flex items-center justify-center mx-auto rounded-full size-14 bg-custom-100 text-custom-500 dark:bg-custom-500/20">
                        <Wallet2 />
                    </div>
                    <h5 className="mt-4 mb-2">$
                        <CountUp end={236.18} decimals={2} className="counter-value" />
                        k</h5>
                    <p className="text-slate-500 dark:text-zink-200">Total Revenue</p>
                </div>
            </div>
            <div className="col-span-12 card md:col-span-6 lg:col-span-6 2xl:col-span-2">
                <div className="text-center card-body">
                    <div className="flex items-center justify-center mx-auto text-purple-500 bg-purple-100 rounded-full size-14 dark:bg-purple-500/20">
                        <Package />
                    </div>
                    <h5 className="mt-4 mb-2"><CountUp end={13461} className="counter-value" /></h5>
                    <p className="text-slate-500 dark:text-zink-200">Total Orders</p>
                </div>
            </div>
        </React.Fragment>
    );
};

export default TwooWidgets;
