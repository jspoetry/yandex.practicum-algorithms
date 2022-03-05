import {receiveInput} from "../../../utility/receiveInput";
import { generateParenthesis } from "./generate-parenthesis";

receiveInput(([count]) => console.log(generateParenthesis(count)))