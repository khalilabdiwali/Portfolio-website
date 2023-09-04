import { Link } from "react-router-dom";
const Account = ({ projectImage }) => {
    return (
        
        <div className=" p-4 bg-slate-100 rounded-lg mx-auto">
          <img src={projectImage} alt="Portfolio 1" width={290} />
          <div class="absolute inset-0 bg-black opacity-0  transition duration-300">
       
      </div>
        </div>
        
         
    );
  };
  
const Accounts = () => {
  const AccountData = [
    {
        projectImage:'/img/w1.jpg'
    },
    {
        projectImage:'/img/w2.jpg'
    },
    {
        projectImage:'/img/w3.jpg'
    },
    
  
  ];

  return (
    <div className="container mx-auto py-6">
    <h1 class="text-center font-semibold text-4xl text-white p-3 mb-8">Explore Our Popular Online Courses</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-7">
        {AccountData.map((data, index) => (
          <div key={index} className="px-6 py-8">
            <Account
              projectImage={data.projectImage}
             
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Account;