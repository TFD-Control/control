import { Product } from '../../types/product';
import ProductOne from '../../images/product/product-01.png';
import ProductTwo from '../../images/product/product-02.png';
import ProductThree from '../../images/product/product-03.png';
import ProductFour from '../../images/product/product-04.png';
import { useNavigate } from "react-router-dom";

import { ArrowDownTrayIcon, EyeIcon, PlusCircleIcon } from '@heroicons/react/24/outline'

const productData: Product[] = [
    {
        image: ProductOne,
        name: 'Apple Watch Series 7',
        category: 'Electronics',
        price: 296,
        sold: 22,
        profit: 45,
    },
    {
        image: ProductTwo,
        name: 'Macbook Pro M1',
        category: 'Electronics',
        price: 546,
        sold: 12,
        profit: 125,
    },
    {
        image: ProductThree,
        name: 'Dell Inspiron 15',
        category: 'Electronics',
        price: 443,
        sold: 64,
        profit: 247,
    },
    {
        image: ProductFour,
        name: 'HP Probook 450',
        category: 'Electronics',
        price: 499,
        sold: 72,
        profit: 103,
    },
];

const TableDocIn = () => {
    const navigate = useNavigate();

    return (
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">

            <div className=" py-6 px-4 md:px-6 xl:px-7.5 flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
                <div className="flex w-full flex-wrap gap-3 sm:gap-5">
                    <div className="flex min-w-47.5">
                        <h4 className="text-xl font-semibold text-black dark:text-white">
                            Documents internes
                        </h4>
                    </div>
                </div>
                <div className="flex w-full max-w-45 justify-end">
                    <button onClick={() => navigate("/documents/internal/add")} className="rounded bg-white py-1 px-3 text-xs font-medium text-black shadow-card hover:bg-white hover:shadow-card dark:bg-boxdark dark:text-white dark:hover:bg-boxdark">
                        <PlusCircleIcon className="h-6 w-6 text-blue-500" />
                        Ajouter
                    </button>
                    <button onClick={() => navigate("")} className="rounded bg-white py-1 px-3 text-xs font-medium text-black shadow-card hover:bg-white hover:shadow-card dark:bg-boxdark dark:text-white dark:hover:bg-boxdark">
            
                        Voir
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
                <div className="col-span-3 flex items-center">
                    <p className="font-medium">Titre</p>
                </div>
                <div className="col-span-2 hidden items-center sm:flex">
                    <p className="font-medium">Createur</p>
                </div>
                <div className="col-span-1 flex items-center">
                    <p className="font-medium">Date d'ajout</p>
                </div>
                {/* <div className="col-span-1 flex items-center">
                    <p className="font-medium">extension</p>
                </div> */}
                <div className="col-span-1 flex items-center">
                    {/* <p className="font-medium">Action</p> */}
                </div>
            </div>

            {productData.map((product, key) => (
                <div
                    className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
                    key={key}
                >
                    <div className="col-span-3 flex items-center">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                            <div className="h-12.5 w-15 rounded-md">
                                <img src={product.image} alt="Product" />
                            </div>
                            <p className="text-sm text-black dark:text-white">
                                {product.name}
                            </p>
                        </div>
                    </div>
                    <div className="col-span-2 hidden items-center sm:flex">
                        <p className="text-sm text-black dark:text-white">
                            {product.category}
                        </p>
                    </div>
                    <div className="col-span-1 flex items-center">
                        <p className="text-sm text-black dark:text-white">
                            ${product.price}
                        </p>
                    </div>
                    {/* <div className="col-span-1 flex items-center">
                        <p className="text-sm text-black dark:text-white">{product.sold}</p>
                    </div> */}
                    <div className="col-span-1 flex items-center space-x-3.5">
                        {/* <p className="text-sm text-meta-3">${product.profit}</p> */}
                        <button className="hover:text-primary">
                            <EyeIcon className="h-6 w-6 text-blue-500" />
                        </button>
                        <button className="hover:text-primary">
                            <ArrowDownTrayIcon className="h-6 w-6 text-blue-500" />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TableDocIn;
