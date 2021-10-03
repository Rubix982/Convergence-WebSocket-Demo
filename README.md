# Convergence, Websocket, Ace Editor Demo

## Getting Started

To run this mini demo, you need `Docker`, `nodejs`, and `yarn` (optional).

Once you have that, open up a terminal, and run,

```bash
docker run -p "8000:80" --name convergence convergencelabs/convergence-omnibus
```

Open up a new terminal, then clone this repository and enter it by running,

```bash
git clone https://github.com/Rubix982/Convergence-WebSocket-Demo/ && cd Convergence-WebSocket-Demo
```

Then head into the `server` directory, and install dependencies. I personally use `yarn`, but use `npm` if you like,

```bash
yarn # installing deps
```

After the installation has finished, run the server by entering,

```bash
node app.js
```

Then visit `http://localhost:3000/`. You should see a screen like this,

![image](https://user-images.githubusercontent.com/41635766/135747662-ed35d7aa-c4f4-4ca2-843f-a957af5a5db6.png)

Head over to the terminal, and you should see this,

![image](https://user-images.githubusercontent.com/41635766/135747690-b1bcde33-b306-41f5-b533-c8a70458f2bf.png)

Close the tab, and it displays when you disconnected,

![image](https://user-images.githubusercontent.com/41635766/135747710-d179ea7a-29cc-4070-9d40-0fa2e22545db.png)

At the moment, this displays when all of the users have left the session.

## TODOs

- See if demo aligns mostly with the FYP requirements.  
