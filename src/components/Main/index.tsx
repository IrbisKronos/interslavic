import * as React from 'react';
import { connect } from 'react-redux';
import Header from 'components/Header';
import InfoPage from 'components/InfoPage';
import { Loader } from 'components/Loader';
import Translator from 'components/Translator';
import './index.scss';
import { fetchDictionary } from 'actions';

interface IMainProps {
    isLoading: boolean;
    loadDictionary: () => void;
}

const dictionaryUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSwmAFvs2FmTYZfaS6VMe3X0VbvuKCs5F94YbvcyRfD070GZ0eNvYZAZXoPuZyT4s6Wqho2wyVzeeeu/pub?gid=1987833874&single=true&output=tsv';

class Main extends React.Component<IMainProps> {
    constructor(props) {
        super(props);
        this.props.loadDictionary();
    }
    public render() {
        return (
            <>
                <Loader title={'Loading dictionary'} isLoading={this.props.isLoading}/>
                <Header/>
                <InfoPage/>
                <Translator/>
            </>
        );
    }
}

function mapStateToProps({ isLoading }) {
    return { isLoading };
}

function mapDispatchToProps(dispatch) {
    return {
        loadDictionary: () => fetchDictionary(dictionaryUrl)(dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
