import React from 'react';

import { Container, Logo, ProfileInfo, Avatar, UserName } from './styles';

const Header: React.FC = () => {
  return (
        <Container>
            <Logo></Logo>
            <ProfileInfo>
                <Avatar>

                </Avatar>
                <UserName>
                    João Zanchett
                </UserName>
            </ProfileInfo>
        </Container>
    );
}

export default Header;