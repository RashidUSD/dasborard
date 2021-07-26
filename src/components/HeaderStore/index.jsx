import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import LogoImage from '../../assets/'
// import InputHooksSearcher from '../InputHooksSearcher/InputHooks'
import  IconLogo from '../../assets/img/logo.png'
import { CartShop } from '../CartShop'
import { HeaderContent, Content/* , ContentInput, TargetUser */, ImageLogo } from './styled'
// import styled from 'styled-components'

export const Header = ({ keyTheme, handleTheme, auth, error }) => {
    const [scrollNav, setScrollNav] = useState(false)
    const changeNav = () => {
        if (window.scrollY >= 1) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (error) return <>Error</>
    // eslint-disable-next-line
    // console.log(results, loading, onchange, search)
    return (
        <>
            {auth &&
                <HeaderContent scrollNav={scrollNav} >
                    <Content >
                        <div style={{ transform: `translateY(${ offsetY * 0.8 }px)` }}>
                            <Link to='/'>
                                <ImageLogo src={IconLogo} />
                                {/* <IconLogo size='80px' color={PColor} /> */}
                            </Link>
                        </div>
                        <div>
                            {/* <ContentInput>
                                <InputHooksSearcher title='Busca tus productos' name='search' value={search} onChange={onchange} type='text' range={{ min: 0, max: 20 }} />
                                {loading && <span>Cargando</span>}
                                <ContainerResults>
                                    {results?.map((x, i) => <div key={1+ i}>
                                        <TargetUser>
                                            <span>{x?.username}</span>
                                        </TargetUser>
                                    </div>)}
                                </ContainerResults>
                            </ContentInput> */}
                        </div>
                        <>
                            <CartShop keyTheme={keyTheme} handleTheme={handleTheme} />
                        </>
                    </Content>
                </HeaderContent>
            }
        </>
    )
}
// const ContainerResults = styled.div `
// position: absolute;
// `