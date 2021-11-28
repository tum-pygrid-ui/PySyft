import Image from 'next/image'
import styled from 'styled-components'
import { useForm } from "react-hook-form"
import { Button } from '@/omui'
import Grid from '../components/Layout/Grid'
import FullWidthSection from '../components/Layout/FullWidthSection'
import MaxWidthSection from '../components/Layout/MaxWidthSection'
import GridRow from '../components/Layout/GridRow'
import { GetStaticProps } from 'next'

const Background = styled.div`
    background-image: url("/signup_background_image.png");
    height: 100vh;
    background-position: right top; 
    background-repeat: no-repeat; 
    background-size: auto; 
`
// export const getStaticProps: GetStaticProps = async () => {
//     const DomainBody = [{
//         'ID#':'ID#449f4f997a96467f90f7af8b396928f1',
//         'Hosted Datasets': '2', 
//         'Deployed On': '09.07.2021', 
//         'Owner': ['Kyoko Eng', '---'],
//         'Network(s)': '---',
//         }
//     ]
//     return (
//         {DomainBody}
//     )
// }

export default function Login() {
    const registerUser = async event => {
        event.preventDefault()
    
        const res = await fetch('/api/register', {
          body: JSON.stringify({
            name: event.target.name.value
          }),
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST'
        })
    
        const result = await res.json()
        // result.user => 'Ada Lovelace'
    }

    return(
        <Background>
            <div id="app" className="flex flex-col h-screen w-screen py-10">
                <div id="header" className="grid grid-cols-3 bg-gray-100 bg-opacity-5 rounded-lg gap-6 p-4">
                    <img className="col-span-1 object-scale-down h-12 ml-20" src={"/assets/small-logo.png"} alt="py-grid-logo"/>
                </div>
                <div id="content" className="grid grid-cols-12 flex-grow text-gray text-left text-l py-4 rounded-lg gap-6 ">
                    <div id="domain-box" className="col-start-2 col-end-6 mg-10 p-10">
                        <h1 id="domain-name" className="text-left text-2xl ">Canada Domain</h1>
                       {/*  <ul id="domain-info" className="text-left text-sm pt-4">
                            {DomainBody.map(({ params }) => (
                                <li className="" key={'ID#'}>
                                        <a>ID#</a>
                                        <a>{'ID#'}</a>
                                </li>
                            ))}
                        </ul> */}
                        <div id="domain-info" className="text-left text-sm pt-4">
                            <p>ID#: ID#449f4f997a96467f90f7af8b396928f1	</p>
                            <p>Hosted Datasets: 2</p>
                            <p>Deployed On: 09.07.2021</p>
                            <p>Owner: KYOKO ENG, ---</p>
                            <p>Network(s): ---</p>
                        </div>
                    </div>
                    <div id="login-form" className="col-start-7 col-end-12 bg-white bg-opacity-70 p-5 m-3 h-96 shadow-lg text-gray text-center text-l">
                        <div className="m-3">
                            <p className="text-2xl">Welcome Back</p>
                            <p>Domain Online</p>
                        </div>
                        <form className="grid grid-cols-4 flex-grow text-gray text-sm text-center p-6 rounded-lg gap-2" onSubmit={registerUser}>
                            <label className="col-span-4 row-1 text-left" htmlFor="email">Email</label>
                            <input className="col-span-4 row-2 text-left p-3 border border-gray-300 rounded-lg" id="email" name="email" type="email" placeholder="abc@university.edu" autoComplete="email" required />
                            <label className="col-span-4 row-3 text-left" htmlFor="name">Password</label>
                            <input className="col-span-4 row-4 text-left p-3 border border-gray-300 rounded-lg" id="name" name="name" type="text" placeholder="Text here" autoComplete="name" required />
                            <p className="col-span-4 text-center text-gray text-sm">Don't have an account yet?
                                <a href="/#" className="col-span-4 text-center text-blue-500"> Apply for an account here</a>
                            </p> 
                            <button className="col-start-2 col-end-4 bg-blue-500 rounded text-white text-center mx-6 px-3 py-2" type="submit">Login</button>
                        </form>
                    </div>
                </div>
                <div id="footer" className="flex flex-row p-4 rounded-lg gap-6">
                    <div className="flex gap-2 ml-20">
                        <div className="pt-1 text-gray text-l text-center">Empowered By</div>
                        <img className="object-contain h-8" src={"/assets/small-om-logo.png"} alt="om-logo"/>
                    </div>
                </div>
            </div>
        </Background>
    )
}