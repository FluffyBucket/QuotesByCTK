import React from 'react';
import { TableRow, TableCell } from 'material-ui';
import Button from 'material-ui/Button';

class QuoteItem extends React.Component {


    render() {
        return (
            <TableRow key={this.props.uid}>
                <TableCell>{this.props.text}</TableCell>
                <TableCell numeric>123</TableCell>
                <TableCell><Button>Test</Button></TableCell>
            </TableRow>

        );
    }
}

export default QuoteItem;