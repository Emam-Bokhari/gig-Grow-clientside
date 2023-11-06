import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const Category = ({ categoryData }) => {
    // console.log(categoryData);
    const data = categoryData
    console.log(data);

    return (
        <div>



            <Tabs>
                <TabList>
                    <Tab>Digital Marketing</Tab>
                    <Tab>Web Development</Tab>
                    <Tab>Graphic Design</Tab>
                </TabList>



                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {data
                            .filter(item => item.category === "Digital Marketing")
                            .map((item, index) => (
                                <div key={index} className="p-4 border border-gray-300 rounded-lg">
                                    <h2 className="text-xl font-semibold">{item.title}</h2>
                                    <p className="text-gray-700">{item.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {data
                            .filter(item => item.category === "Web Development")
                            .map((item, index) => (
                                <div key={index} className="p-4 border border-gray-300 rounded-lg">
                                    <h2 className="text-xl font-semibold">{item.jobTitle}</h2>
                                    <p className="text-gray-700">{item.deadline}</p>
                                    <p className="text-gray-700">{item.minimumPrice}</p>
                                    <p className="text-gray-700">{item.maximumPrice}</p>

                                    <p className="text-gray-700">
                                        {item.description.length > 100
                                            ? `${item.description.slice(0, 100)}...`
                                            : item.description
                                        }
                                    </p>
                                    
                                </div>
                            ))
                        }
                    </div>
                </TabPanel>

                {/* Graphic Design */}
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {data
                            .filter(item => item.category === "Graphic Design")
                            .map((item, index) => (
                                <div key={index} className="p-4 border border-gray-300 rounded-lg">
                                    <h2 className="text-xl font-semibold">{item.jobTitle}</h2>
                                    <p className="text-gray-700">{item.deadline}</p>
                                    <p className="text-gray-700">{item.minimumPrice}</p>
                                    <p className="text-gray-700">{item.maximumPrice}</p>
                                    {/* <p className="text-gray-700">{item.description}</p> */}
                                </div>
                            ))
                        }
                    </div>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Category;