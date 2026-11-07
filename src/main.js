import "./style.css";
import "./styles/hero.css";
import "./styles/image-details.css";
import "./styles/poster.css";
import { initializeCounter } from "./scripts/counter.js";

const intervalId = setInterval(() => {initializeCounter(intervalId)}, 1000);