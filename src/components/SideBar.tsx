import { useState, ChangeEvent } from 'react';
import { Box, ChartNoAxesColumnIncreasing, House, User, Wallet } from 'lucide-react';
import { NavLink } from 'react-router-dom';

function SideBar(): JSX.Element {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [profileImage, setProfileImage] = useState<string | null>(sessionStorage.getItem('profileImage') || null);

    const handleImageUpload = (event: ChangeEvent<HTMLInputElement>): void => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            
            reader.onloadend = () => {
                const result = reader.result as string;
                sessionStorage.setItem('profileImage', result);
                setProfileImage(result);
                setIsModalOpen(false);
            };
            
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveImage = (): void => {
        sessionStorage.removeItem('profileImage');
        setProfileImage(null);
        setIsModalOpen(false);
    };

    return (
        <>
            <div className='h-full bg-cyan-50/80 border-r-2 border-cyan-400/100 w-16 absolute left-0 flex justify-center align-top pt-5 z-10'>
                <div className='flex justify-between flex-col'>
                    <ul className='flex flex-col gap-5'>
                        <li><NavLink to="/"><House color='#1e1e1e' /></NavLink></li>
                        <li><NavLink to="/goals"><Box color='#1e1e1e' /></NavLink></li>
                        <li><NavLink to="/wallet"><Wallet color='#1e1e1e' /></NavLink></li>
                        <li><NavLink to="/charts"><ChartNoAxesColumnIncreasing color='#1e1e1e' /></NavLink></li>
                    </ul>
                    <div className='pb-5'>
                        {profileImage ? (
                            <img 
                                src={profileImage} 
                                alt="Profile" 
                                className="w-8 h-8 rounded-full cursor-pointer" 
                                onClick={() => setIsModalOpen(true)} 
                            />
                        ) : (
                            <User onClick={() => setIsModalOpen(true)} className="cursor-pointer" />
                        )}
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
                    <div className='bg-white p-10 rounded'>
                        <h2 className='text-center mb-4'>Upload Profile Picture</h2>
                        <input className='rounded-sm' type="file" onChange={handleImageUpload} accept="image/*" />
                        <div className='flex justify-between mt-4'>
                            <button onClick={handleRemoveImage} className='bg-red-500 text-white py-2 px-4 rounded'>
                                Remove Image
                            </button>
                            <button onClick={() => setIsModalOpen(false)} className='bg-cyan-500 text-white py-2 px-4 rounded'>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default SideBar;
