const { readRequests, writeRequests } = require('../utils/fileHandler');
const fs = require('fs');
const path = require('path');

const requestsFilePath = path.join(__dirname, '../data/requests.json');

const addRequest = (req, res) => {
    const { guestName, roomNumber, requestDetails, priority } = req.body;
    const requests = readRequests(requestsFilePath);
    const newRequest = {
        id: Date.now().toString(),
        guestName,
        roomNumber,
        requestDetails,
        priority,
        status: 'received',
    };
    requests.push(newRequest);
    writeRequests(requestsFilePath, requests);
    res.status(201).json(newRequest);
};

const getAllRequests = (req, res) => {
    const requests = readRequests(requestsFilePath);
    const sortedRequests = requests.sort((a, b) => a.priority - b.priority);
    res.status(200).json(sortedRequests);
};

const getRequestById = (req, res) => {
    const requests = readRequests(requestsFilePath);
    const request = requests.find(r => r.id === req.params.id);
    if (request) {
        res.status(200).json(request);
    } else {
        res.status(404).json({ message: 'Request not found' });
    }
};

const updateRequest = (req, res) => {
    const requests = readRequests(requestsFilePath);
    const requestIndex = requests.findIndex(r => r.id === req.params.id);
    if (requestIndex > -1) {
        const updatedRequest = { ...requests[requestIndex], ...req.body };
        requests[requestIndex] = updatedRequest;
        writeRequests(requestsFilePath, requests);
        res.status(200).json(updatedRequest);
    } else {
        res.status(404).json({ message: 'Request not found' });
    }
};

const deleteRequest = (req, res) => {
    const requests = readRequests(requestsFilePath);
    const requestIndex = requests.findIndex(r => r.id === req.params.id);
    if (requestIndex > -1) {
        requests.splice(requestIndex, 1);
        writeRequests(requestsFilePath, requests);
        res.status(200).json({ message: `${req.params.id} deleted successfully`});
    } else {
        res.status(404).json({ message: 'Request not found' });
    }
};

const completeRequest = (req, res) => {
    const requests = readRequests(requestsFilePath);
    const requestIndex = requests.findIndex(r => r.id === req.params.id);
    if (requestIndex > -1) {
        requests[requestIndex].status = 'completed';
        writeRequests(requestsFilePath, requests);
        res.status(200).json(requests[requestIndex]);
    } else {
        res.status(404).json({ message: 'Request not found' });
    }
};

module.exports = {
    addRequest,
    getAllRequests,
    getRequestById,
    updateRequest,
    deleteRequest,
    completeRequest,
};
