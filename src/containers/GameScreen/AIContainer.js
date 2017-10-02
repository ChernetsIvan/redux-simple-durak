import { connect } from "react-redux";
import AI from "./../../components/GameScreen/AI";

const mapStateToProps = store => ({
  cards: store.game.aiCards
});

export default connect(mapStateToProps)(AI);
