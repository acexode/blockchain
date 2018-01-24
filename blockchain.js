//import { createHash } from 'crypto';

const SHA256 = require('crypto-js/sha256')

class Block {
    constructor(index, timestamp, data, prevHash = '') {
        this.index = index
        this.timestamp = timestamp
        this.data = data
        this.prevHash = prevHash
        this.hash = this.createHash()

    }
    createHash() {
        return SHA256(this.index + this.timestamp + JSON.stringify(this.data)).toString()
    }

}
class BlockChain {
    constructor() {
        this.chain = [this.firstBlock()]
    }
    firstBlock() {
        return new Block(0, "1/12/2018", "first block", "0")
    }
    getLatestBlock() {
        return this.chain[this.chain.length - 1]
    }
    addBlock(newBlock) {
        newBlock.prevHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.createHash()
        this.chain.push(newBlock)
    }
}
let acecode009 = new BlockChain()
acecode009.addBlock(new Block(1, "1/12/2018", { amount: 20 }))
acecode009.addBlock(new Block(2, "1/13/2018", { amount: 18 }))

console.log(acecode009)