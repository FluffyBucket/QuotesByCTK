import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiToolBar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import styled from 'styled-components';

const Title = styled(Typography)`
&& {
  flex: 1;
  text-align: left;
  cursor: pointer;
}
`;

const Header = styled.div `
    grid-area: header;
`;

class ToolBar extends React.Component {

    render() {
        return (
            <Header>
                <AppBar color="primary" position="static">
                    <MuiToolBar>
                        <Title type="title" color="inherit">
                            Quotes by CTK!
                        </Title>
                    </MuiToolBar>
                    
                </AppBar>
            </Header>
        );
    }
}

export default ToolBar;