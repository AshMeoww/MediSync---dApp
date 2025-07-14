// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract MediSync {
    struct Record {
        string cid;
        bytes32 metadataHash;
        uint timestamp;
    }

    mapping(address => Record[]) public records;

    function uploadRecord(string memory cid, bytes32 metadataHash) public {
        records[msg.sender].push(Record(cid, metadataHash, block.timestamp));
    }

    function getRecords(address user) public view returns (Record[] memory) {
        return records[user];
    }
}
