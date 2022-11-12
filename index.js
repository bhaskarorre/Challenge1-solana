// Import Solana web3 functinalities
const {
    Connection,
    PublicKey,
    clusterApiUrl,
    Keypair,
    LAMPORTS_PER_SOL
} = require("@solana/web3.js");

const args = process.argv;
const user_public_key = args[2];


    
console.log("user_public_key:", user_public_key);
// Create a new keypair
//const newPair = new Keypair();

// Exact the public and private key from the keypair
//const publicKey = new PublicKey(newPair._keypair.publicKey).toString();
//const privateKey = newPair._keypair.secretKey;
//const privateKey2 = new PublicKey(newPair._keypair.secretKey).toString();
// Connect to the Devnet
const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

//console.log("Public Key of the generated keypair", publicKey);
//console.log("Public Key of the generated keypair2", publicKey);
//console.log("privateKey2 Key of the generated keypair", privateKey2);

// Get the wallet balance from a given private key
const getWalletBalance = async () => {
    try {
        // Connect to the Devnet
        const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
        console.log("Connection object is:", connection);

        // Make a wallet (keypair) from privateKey and get its balance
        const myWallet = await Keypair.fromSecretKey(privateKey);
        const walletBalance = await connection.getBalance(
            new PublicKey(newPair.publicKey)
        );
        console.log(`Wallet balance: ${parseInt(walletBalance) / LAMPORTS_PER_SOL} SOL`);
    } catch (err) {
        console.log(err);
    }
};



const airDropSol = async () => {
    try {
        // Connect to the Devnet and make a wallet from privateKey
        const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
        const myWallet = await Keypair.fromSecretKey(privateKey);

        // Request airdrop of 2 SOL to the wallet
        console.log("Airdropping some SOL to my wallet!");
        const fromAirDropSignature = await connection.requestAirdrop(
            new PublicKey(myWallet.publicKey),
            2 * LAMPORTS_PER_SOL
        );
        await connection.confirmTransaction(fromAirDropSignature);
    } catch (err) {
        console.log(err);
    }
};


const airDropSol_new = async () => {
    try {
        // Connect to the Devnet and make a wallet from privateKey
        const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
        //const myWallet = await Keypair.fromSecretKey(privateKey);

        // Request airdrop of 2 SOL to the wallet
        console.log("Airdropping some SOL to my wallet!2");
        const fromAirDropSignature = await connection.requestAirdrop(
            new PublicKey(user_public_key),
            2 * LAMPORTS_PER_SOL
        );
        await connection.confirmTransaction(fromAirDropSignature);
    } catch (err) {
        console.log(err);
    }
};

const getWalletBalance_new = async () => {
    try {
        // Connect to the Devnet
        const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
        //console.log("Connection object is:", connection);

        // Make a wallet (keypair) from privateKey and get its balance
        //const myWallet = await Keypair.fromSecretKey(privateKey);
        const walletBalance = await connection.getBalance(
            
            new PublicKey(user_public_key)
        );
        console.log(`Wallet balance2: ${parseInt(walletBalance) / LAMPORTS_PER_SOL} SOL`);
    } catch (err) {
        console.log(err);
    }
};

// Show the wallet balance before and after airdropping SOL
const mainFunction = async () => {
    
    //await getWalletBalance();
    //await airDropSol();
    //await getWalletBalance();
    await airDropSol_new();
    await getWalletBalance_new();
}

mainFunction();
