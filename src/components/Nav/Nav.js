import React from 'react';
import { Menu } from 'semantic-ui-react';
import styled from 'styled-components';

const items = [
  { key: 'editorials', name: 'Editorials' },
  { key: 'review', name: 'Reviews' },
  { key: 'events', name: 'Upcoming Events' }
];

const StyledNav = styled(Menu)`
  background: #57b846;
`;

const Nav = () => <StyledNav color="green" items={items} />;

export default Nav;
