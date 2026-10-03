import { Tabs, TabsContent, TabsTrigger, TabsList } from '../../components/ui/tabs';
import { Input } from '../../components/ui/input';
import Background from '../../assets/login2.png';
import Victory from '../../assets/victory.svg';
import { useState } from 'react';

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleLogin = async () => {};
    const handleSignup = async () => {};

    return (
        <div className='h-screen w-screen flex items-center justify-center bg-gray-50'>
            <div className='h-[80vh] w-[80vw] bg-white border-2 border-white text-opacity-90 shadow-2xl md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl grid xl:grid-cols-2 overflow-hidden'>
                <div className='flex flex-col gap-8 items-center justify-center p-6'>
                    <div className='flex items-center justify-center flex-col'>
                        <div className='flex items-center justify-center gap-2'>
                            <h1 className='text-4xl font-bold md:text-5xl'>Welcome</h1>
                            <img src={Victory} alt='victory' className='h-12' />
                        </div>
                        <p className='font-medium text-center text-sm text-gray-500 mt-2'>
                            Fill the details to get started with the best chat application!
                        </p>
                    </div>

                    <div className='flex items-center justify-center w-full'>
                        <Tabs defaultValue='login' className='w-3/4 flex flex-col'>
                            <TabsList className='bg-transparent rounded-none w-full flex border-b border-gray-200 p-0'>
                                <TabsTrigger 
                                    value='login' 
                                    className='w-full rounded-none border-b-2 border-transparent bg-transparent py-3 text-black transition-all data-[state=active]:border-b-purple-500  data-[state=active]:bg-transparent data-[state=active]:font-semibold shadow-none'
                                >
                                    LogIn
                                </TabsTrigger>
                                <TabsTrigger 
                                    value='signup' 
                                    className='w-full rounded-none border-b-2 border-transparent bg-transparent py-3 text-black transition-all data-[state=active]:border-b-purple-500 data-[state=active]:bg-transparent data-[state=active]:font-semibold shadow-none'
                                >
                                    SignUp
                                </TabsTrigger>
                            </TabsList>

                            {/* LogIn Tab Content */}
                            <TabsContent value='login' className='flex flex-col gap-4 mt-6 w-full'>
                                <Input 
                                    placeholder='Email'
                                    type='email'
                                    value={email}
                                    className='rounded-full px-5 py-6 w-full'
                                    onChange={(e) => setEmail(e.target.value)} 
                                />
                                <Input 
                                    placeholder='Password'
                                    type='password'
                                    value={password}
                                    className='rounded-full px-5 py-6 w-full'
                                    onChange={(e) => setPassword(e.target.value)} 
                                />
                                <button 
                                    onClick={handleLogin}
                                    className='w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 rounded-full transition-colors mt-2'
                                >
                                    Login
                                </button>
                            </TabsContent>

                            {/* SignUp Tab Content */}
                            <TabsContent value='signup' className='flex flex-col gap-4 mt-6 w-full'>
                                <Input 
                                    placeholder='Email'
                                    type='email'
                                    value={email}
                                    className='rounded-full px-5 py-6 w-full'
                                    onChange={(e) => setEmail(e.target.value)} 
                                />
                                <Input 
                                    placeholder='Password'
                                    type='password'
                                    value={password}
                                    className='rounded-full px-5 py-6 w-full'
                                    onChange={(e) => setPassword(e.target.value)} 
                                />
                                <Input 
                                    placeholder='Confirm Password'
                                    type='password'
                                    value={confirmPassword}
                                    className='rounded-full px-5 py-6 w-full'
                                    onChange={(e) => setConfirmPassword(e.target.value)} 
                                />
                                <button 
                                    onClick={handleSignup}
                                    className='w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 rounded-full transition-colors mt-2'
                                >
                                    Sign Up
                                </button>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>

                {/* Right side illustration / background (optional for xl screens) */}
                <div className='hidden xl:flex items-center justify-center bg-purple-50'>
                    <img src={Background} alt='auth background' className='max-h-[70%] object-contain' />
                </div>
            </div>
        </div>
    );
};

export default Auth;