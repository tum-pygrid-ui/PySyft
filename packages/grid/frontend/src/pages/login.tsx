import Image from 'next/image'
import styled from 'styled-components'
import { useForm } from "react-hook-form"
import { Button } from '@/omui'

const FormBox = styled.div`
    justify-content: center;
    align-items: center;
    padding: 5px 10px 15px;
    color: black;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.5) 100%), #F1F0F4;
    border-radius: 4px;
    margin: 4em; 
    display: grid;
    grid-template-rows: repeat(8, minmax(10px, auto))
    grid-templeate-area:
        "welcome"
        "domain_status"
        "email_label"
        "email_input"
        "password_label"
        "password_input"
        "sign_up"
        "login_button"
`

const Background = styled.div`
    background-image: url("/signup_background_image.png");
    height: minmax(883px,auto);
    background-position: right top; 
    background-repeat: no-repeat; 
    background-size: auto; 
    margin: 0;
`
const Container=styled.div`
    background-color: #fffff04c;
    display: grid; 
    height: 100vh;
    color: white;
    text-align: center;
    grid-gap: 1em;
    grid-template-columns: 50% 50%;
    grid-template-rows: 15% 70% 15%;
    grid-template-areas: 
        "header header"
        "left right"
        "footer footer"
`
const HeaderLogo = styled.div`
    background: #9aaab74c;
    grid-area: header;
    justify-content: left;
`;

const Right = styled.main`
    background: #9aaab74c;
    grid-area: right; 
`;

const Left = styled.div`
    background: #9aaab74c;
    grid-area: left;
`;

const FooterLogo = styled.div`
    background: #9aaab74c;
    grid-area: footer;
`;

const StyledImage = styled(Image)`
    justify-self: left;
    padding-left: 2em;
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
        </Background>
    )
}

{/* <section>
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
