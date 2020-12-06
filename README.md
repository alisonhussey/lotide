# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @alisonhussey/lotide`

**Require it:**

`const _ = require('@alisonhussey/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: function to retrieve the first element from the array
* `tail`: function to return every element except the head of the array.
* `middle`: function to return an array with only the middle element(s) of the provided array
* `assertArraysEqual`: function for asserting that two arrays are equal
* `assertEqual`: function for asserting that two outputs are equal
* `eqArrays`: function to compare two arrays for a perfect match
* `assertObjectsEqual`: function for asserting that two objects are equal
* `countOnly`: function takes in a collection of items and returns counts for a specific subset of those items
* `countLetters`: function takes in a sentence (as a string) and returns a count of each of the letters in that sentence
* `eqObjects`: function to compare two objects for a perfect match
* `findKey`: function to scan an object and return the first key for which the callback returns a truthy value.
* `findKeyByValue`: function searches for a key on an object where its value matches a given value
* `letterPositions`: function returns all the indices in the string where each character is found
* `map`: iterates its elements in insertion order and returns an array of [key, value] for each iteration.
* `only`: function iterates through an object and returns only those items that match what we're looking for.
* `takeUntil`:  function returns a slice of an array with elements taken from the beginning, until the callback returns a truthy value
* `without`: function to filter our data by removing some unwanted items