import Image from 'next/image'
import styled from 'styled-components'
import { useForm } from "react-hook-form"
import { Button } from '@/omui'
import Grid from '../components/Layout/Grid'
import FullWidthSection from '../components/Layout/FullWidthSection'
import MaxWidthSection from '../components/Layout/MaxWidthSection'
import GridRow from '../components/Layout/GridRow'

const Background = styled.div`
    background-image: url("/signup_background_image.png");
    height: minmax(883px,auto);
    background-position: right top; 
    background-repeat: no-repeat; 
    background-size: auto; 
    margin: 0;
`
const Nav = styled(GridRow)`
    a {
        margin-right: 1rem;
    }
    p {
        grid-column-start: 2;
    }
    img {
        margin: 1rem;
    }
`
const Header = styled(FullWidthSection)`
    padding: 4rem 1.5rem; 
    background-color: #9aaab702;
`
// const Content = styled(MaxWidthSection)`
//     padding: 15rem 5rem; 
//     background-color: #9a00f74c;

//     p {
//         grid-column: 5/12;
//         background-color: white;
//     } 
//`
const Content = styled.main`
    grid-column: 1 / span 14;
    display: grid;
    grid-template-columns: 1fr repeat(12, minmax(auto, 4.2rem)) 1fr;
    grid-template-rows: max-content;
    grid-gap: 2rem 2rem; 
    
    padding: 5rem 5rem; 
    background-color: #9aaab705;
    div{
        grid-column:2/10;
        margin: 3rem;
    }
    main{
        grid-column:10/18;
        margin: 2rem;
    }
`
const Footer = styled(FullWidthSection)`
    padding: 4rem 1.5rem; 
    background-color: #9aaab702;
    align-content: center;
    img {
        margin-left: 10em;
        justify-items: center;
    }
    h1 {
        justify-items: center; 
        align-items: center
    }
`

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

    return (
        <Background>
            <Header>
               <Nav as="nav" sd={2} ed={12}>
                    <img src="/assets/small-logo.png" width={100} height={40} />
                </Nav>
            </Header>
            <Content>
                <div className="bg-gradient-to-r from-white-400 to-gray-500 mx-1 max-w-sm shadow-lg rounded-lg overflow-hidden"> 
                    <div className="sm:flex sm:items-center px-6 py-4"> 
                    <div className="text-center sm:text-left sm:flex-grow"> 
                    <div className="mb-4"> 
                        <h1 className="text-xl leading-tight">Canada Domain</h1> 
                        <p className="text-sm leading-tight text-gray-400">ID: </p>
                        <p className="text-sm leading-tight text-gray-400">Hosted Datasets:</p>
                        <p className="text-sm leading-tight text-gray-400">Deployed On:</p>
                        <p className="text-sm leading-tight text-gray-400">Owner</p>
                        <p className="text-sm leading-tight text-gray-400">Network</p>
                    </div> 
                    </div> 
                </div> 
                </div>
                <main className="bg-white mx-1 max-w-sm shadow-lg rounded-lg overflow-hidden"> 
                    <div className="sm:flex sm:items-center px-6 py-4"> 
                    <div className="text-center sm:text-left sm:flex-grow"> 
                    <div className="mb-4"> 
                        <h2 className="text-xl leading-tight">Welcome Back</h2> 
                        <p className="text-sm leading-tight text-gray-400">Domain Online</p> 
                    </div> 
                        <form onSubmit={registerUser}>
                                    <label htmlFor="email">Email</label>
                                    <input id="email" name="email" type="text" autoComplete="email" required />
                                    <label htmlFor="password">Password</label>
                                    <input id="password" name="password" type="text" autoComplete="password" required />
                                    <div> 
                                        <button className="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border-2 border-purple-400 text-purple-500 hover:bg-purple-600 hover:text-white">{'LOGIN'}</button> 
                                    </div> 
                        </form>
                    </div> 
                </div> 
                </main>
            </Content>
            <Footer>
                <Nav as="nav" sd={2} ed={12}>
                    <h1>Empowered By</h1>
                    <img src="/assets/small-om-logo.png" alt="PyGrid Logo" width={200} height={50}/>
                </Nav>
            </Footer>
        </Background>
    )
}

{/* <section>
            <Container>
                <HeaderLogo>
                    <Image
                        src="/assets/small-logo.png"
                        alt="PyGrid Logo"
                        width="99,67px"
                        height="40,27px"
                    />
                </HeaderLogo>
                <Left>
                    <div>DomainInfo</div>
                    <div>ID:</div>
                    <div>Hosted Datasets:</div>
                    <div>Deployed On:</div>
                    <div>Owner:</div>
                    <div>Networks:</div></Left>
                <Right>SideBar
                    <FormBox>
                        <form onSubmit={registerUser}>
                            <label htmlFor="email">Email</label>
                            <input id="email" name="email" type="text" autoComplete="email" required />
                            <label htmlFor="password">Password</label>
                            <input id="password" name="password" type="text" autoComplete="password" required />
                            <button className="bg-black text-white m-1 p-1" type="submit">Login</button>
                            <Button 
                                size="sm" 
                                variant="primary"
                                color="primary"
                                className="mt-6 w-full justify-center">
                                {'LOGIN'}
                            </Button>
                        </form>
                    </FormBox>
                </Right>
                <FooterLogo>
                    <p>Empowered By</p>
                    <StyledImage
                        src="/assets/small-om-logo.png"
                        alt="PyGrid Logo"
                        width={200}
                        height={50}
                    /> 
                </FooterLogo>
            </Container>
            <Body>
                <Image
                    src="/signup_background_image.png"
                    layout="responsive"
                    width="730.31px"
                    height="779.75px"
                />
            </Body>
            <Header>
                    <Image
                        src="/assets/small-logo.png"
                        alt="PyGrid Logo"
                        width="99,67px"
                        height="40,27px"
                    />
            </Header>
            <section className="grid grid-cols-2 gap-6 m-4 justify-between">
                <section className="col-span-6 bg-white text-black">
                    <DomainBox>
                            <DomainInfo>
                                <Title>DomainInfo</Title>
                                <div>ID:</div>
                                <div>Hosted Datasets:</div>
                                <div>Deployed On:</div>
                                <div>Owner:</div>
                                <div>Networks:</div>
                            </DomainInfo>
                    </DomainBox>
                </section>
                <FormBox>
                    <form onSubmit={registerUser}>
                        <label htmlFor="email">Email</label>
                        <input id="email" name="email" type="text" autoComplete="email" required />
                        <label htmlFor="password">Password</label>
                        <input id="password" name="password" type="text" autoComplete="password" required />
                        <button className="bg-black text-white m-1 p-1" type="submit">Login</button>
                        <Button 
                            size="sm" 
                            variant="primary"
                            color="primary"
                            className="mt-6 w-full justify-center">
                            {'LOGIN'}
                        </Button>
                    </form>
                </FormBox>
            </section>
            <Footer>
                <Image
                    src="/assets/small-om-logo.png"
                    alt="PyGrid Logo"
                    width={200}
                    height={50}
                />
            </Footer>
        </section> */}


// const DomainBox = styled.div`
//     /* [BODY] */

//     /* Auto Layout */
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     padding: 0px;

//     position: absolute;
//     width: 456px;
//     height: 258px;
//     left: 144px;
//     top: 139px;

//     Support {
//         /* [SUPPORT] */

//         position: static;
//         display: none;
//         width: nanpx;
//         height: nanpx;
//         left: 0px;
//         top: 290px;


//         /* Inside Auto Layout */
//         flex: none;
//         order: 3;
//         flex-grow: 0;
//         margin: 32px 0px;
//     }
// `

// const DomainInfo = styled.div`
//     Info {
//         /* [DOMAIN INFO] */

//         /* Auto Layout */
//         display: flex;
//         flex-direction: column;
//         align-items: flex-start;
//         padding: 0px;

//         position: static;
//         width: 313px;
//         height: 173px;
//         left: 0px;
//         top: 85px;


//         /* Bold/Small */
//         font-family: Roboto;
//         font-style: normal;
//         font-weight: bold;
//         font-size: 14px;
//         line-height: 150%;
//         /* identical to box height, or 21px */
        
//         /* Theme/Gray/800 */
//         color: #2D2B3A;
        
        
//         /* Inside Auto Layout */
//         flex: none;
//         order: 0;
//         flex-grow: 0;
//         margin: 0px 12px;
//     } 
// `

// const Title = styled.h1`
//     /* Canada Domain */

//     position: static;
//     width: 456px;
//     height: 53px;
//     left: 0px;
//     top: 0px;

//     /* Regular/5XLarge */
//     font-family: Rubik;
//     font-style: normal;
//     font-weight: 500;
//     font-size: 48px;
//     line-height: 110%;
//     /* identical to box height, or 53px */
//     display: flex;
//     align-items: flex-end;

//     /* Theme/Gray/800 */
//     color: #2D2B3A;


//     /* Inside Auto Layout */
//     flex: none;
//     order: 1;
//     flex-grow: 0;
//     margin: 8px 0px;
// `

// const Header = styled.div`
//     /* Logo */

//     position: absolute;
//     width: 100px;
//     height: 40.27px;
//     left: 144px;
//     top: 42px;

//     Image {
//         /* Logo */

//         position: absolute;
//         width: 100px;
//         height: 40.27px;
//         left: 144px;
//         top: 42px;
//     }
// `

// const Footer = styled.div`
//     /* [EMPOWERED BY] */

//     /* Auto Layout */
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     padding: 0px;

//     position: absolute;
//     width: 180.87px;
//     height: 24px;
//     left: 144px;
//     top: 960px;
    
//     Image {
//         /* Logo */

//         position: static;
//         width: 93.87px;
//         height: 24px;
//         left: 87px;
//         top: 0px;

//         /* Inside Auto Layout */
//         flex: none;
//         order: 1;
//         flex-grow: 0;
//         margin: 0px 8px;
//     }
// `

// const Body = styled.section`
//     /* Image */

//     position: absolute;
//     width: 808px;
//     height: 882.87px;
//     left: 724px;
//     top: -13px;
// ` 
