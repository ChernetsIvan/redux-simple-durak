import { connect } from 'react-redux';
import Deck from './../../components/GameScreen/Deck';

const mapStateToProps = store => ({
    cards: store.game.fullDeck
});

export default connect(mapStateToProps)(Deck);