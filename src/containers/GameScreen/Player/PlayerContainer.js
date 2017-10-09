import { connect } from "react-redux";
import Player from "./../../../components/GameScreen/Player/Player";
import { clickOnCard } from "./../../../actions";

const mapStateToProps = store => ({
  cards: store.game.playerCards
});

export const mapDispatchToProps = dispatch => ({
  onCardClick: cardId => {
    dispatch(clickOnCard(cardId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
