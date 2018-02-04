import React from 'react';
import Table, { TableBody } from 'material-ui/Table';
import QuoteItem from './QuoteItem';

class QuoteList extends React.Component {

    render() {
        return (
            <Table>
                <TableBody>
                    { /* Render the list of messages */
                        this.props.quotes.map( quote => <QuoteItem uid={quote.id} text={quote.text}/> )
                    }
                </TableBody>
            </Table>
        );
    }

}

export default QuoteList;