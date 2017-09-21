import { connect } from "react-redux";
import Player from "./../../../components/GameScreen/Player/Player";
import { clickOnPrev, clickOnNext, clickOnCard } from "./../../../actions";

const mapStateToProps = store => ({
  cards: store.game.playerCards
});

const mapDispatchToProps = dispatch => ({
  onCardClick: cardId => {
    dispatch(clickOnCard(cardId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
