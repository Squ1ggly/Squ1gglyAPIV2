import { Router } from "express";
import logRequest from "../middleware/log-request";
import Hell from "../classes/hell";

const isThisHell = Router();

isThisHell.get("/", logRequest, (req, res, next) => {
  const theBigQuestion = new Hell();
  const responseObj = {
    "⛧ ⛧̵̨͇̳͍̺̤̮̔͐̿̅̆̒͗̕͠ ̵̨̥͓̤̞͈̗́☠̵̗̗̙̯͖́̓͗̌̽͊̈̇́̐̍͘ ̴̬̙́͒⛥̵̣̮̲͍̼͆̈̽̔̈́͋͒̚̕͘͝͝ ̴̠͇̼̩̟͚̥̈́̔̾̓̚ͅψ̷̨̨̺̻̬̮͙̝̙͂̒ͅ ̵̘̙̭̼͕̊͂̿̚̕͘ψ̴̨͖͚͕͍̲͍̙̜͙̃̏̓̇̒̚͝ͅ ̶͙͔͈̪̝̫̩̜̂̈̂͜͝⛧̶̛̰̜̰̘̜̉̔̽̈́̃̿̔̐ ̷̛̹̳̜͎̬̺̞͎̓̏͊́͆̒̑͂͗⛥̴̙̊͠ ̸̢̨̙͙͙̠̹̤̐́̉̋͆̕̕⛥̷̧̝͕̠͎̲̱̻̰͊̓̍̓̿͋̈̏͠ ̴̧̛͈̟̥͚̫̤͋́͠͝⛧̸̨̨̪͙̞̲̦̼̮̒ͅ ̸̰̬̭̆͗̉͋̌̌̊⛧̸̢̜̯̣̱̪̯̭́̀͐̑̽̉͘͝ ̶̡̢̲͙̖͐̔̎̀̄̏̀̌͌͜͠͝⛧̶̠͉̰̗̹͉̺͎̋́̓̒́͋́̎͂̋͠ ̸̹̬̘̳̼̦̪͍̮̺̜͜͝⛥̶̢̡̛̙̥̺̩͔̮͕̻̐̂̃̆̀̄̌̚⛥̸̺̗̖̒̈͘͜ ̸͖̗̩̝̫͎̖̜͎̩̭̇⛧̶̨͉̳̾̿͊͐̔̉͆͜ ̷̫͙̭͚̻̳̀̒☠̶̝̣͐ ̴̧̯̔͜☠̷͉̈́ ̷̡̨̛̛͎̪̤̞̞̘̠̤̬͂̒̾͂̃̄͑̊͘͝ͅ☠̵̨̛̛͎̰̖͉̌͑́͗̀̿̄̇ ̸̢̡͇̤̘̖̥̻̣͋̿͜͜͝ͅ⛧̵̢̢̣̰͖̹̞̺͓̭͒͌͋͜ ̷̡͉̤̰͇̩̏͛⛥̴͈͔̬̝͍̘͕̎ ̴̛̯͓̙͓̙͉̰̾͛̿̾͌̈́͝ψ̷̠͙̰̦̃̈́̋̆͛̍͛̋̓̃͘ ̴̧̟̠̜̗̟͇͈̞͎̱̈́͒͂̄̇̈́͑͑͝⛧̵̹̹̳͉͇̬̲͌͐̌̕ ̸̠̌̒̀̈̈́͆⛧̵̩̘̩̤̮͂̇̐̀̓͆̎̅́̔̐ ̸͔͍̱̞̮͌̾ͅ⛥̴̨̢̨̡̺̹̪͎͈͔̻̪̑̒̌͊͆̚ ̴͍̞̒̉͂̈́̉͜͠☠̴͙̦͍̪̬̠̞̼̘̞̓̈́͗̓͛̊͊͊̉͘ ⛧": theBigQuestion.theTruth,
    message: "I have ur ip now LOLLOLLOLLOLLOL"
  }
  res.status(418).send(responseObj);
  next();
})

export default isThisHell;