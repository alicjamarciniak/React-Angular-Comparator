import { Component, Input } from '@angular/core';

interface Data {
  key1: string,
  key2: string,
  key3: string
}

@Component({
    selector: 'ap2',
    template: `
        < div>
            <h3>Title: {{ $ctrl.config.title }}</h3>
            <p>Greeting: {{ $ctrl.hello }}</p>
        </div>
    `,
  })

export class App2 {
    @Input() http: string
    @Input() config: string

    rowsCollection: Array<Data>


    static $inject = ['$http', 'config'];

    hello: string = 'Angular Web Component';

    constructor(http, config) {
        this.http = $http;
        this.config = config;
    }


    measureTime(callback) {
        let t0 = performance.now();
        callback();
        let t1 = performance.now();
    
        return t1 - t0
      }
    
      createRows(n) {
        this.rowsCollection = [];
    
        for (let i; i < n; ++i) {
          this.rowsCollection.push({ key1: "value1", key2: "value2", key3: "value3" })
        }
    
        return this.rowsCollection
      }
    
      updateAllRows(n: number) {
        for (let i; i < n; ++i) {
          this.rowsCollection.push({ key1: "value2", key2: "value3", key3: "value1" })
        }
      }
    
      partialUpdate(n: number) {
        for (let i; i < n; i + 10) {
          this.rowsCollection.push({ key1: "value3", key2: "value1", key3: "value2" })
        }
      }
    
      selectRow(index: number) {
        return this.rowsCollection[index]
      }
    
      swapRows(index1: number, index2: number) {
        let temp = this.rowsCollection[index1]
        this.rowsCollection[index1] = this.rowsCollection[index2]
        this.rowsCollection[index2] = temp
      }
    
      removeRow(index: number) {
        let removedRow: Data = this.rowsCollection[index]
    
        for (let i = index; i < this.rowsCollection.length - 1; ++i) {
          this.rowsCollection[i] = this.rowsCollection[i + 1]
        }
    
        return removedRow
      }
    
      appendRowsToLargeArray(n: number) {
        let largeArray: Array<Data> = this.createRows(10000)
    
        for (let i = largeArray.length; i < largeArray.length + n; ++i) {
          largeArray.push({ key1: "value1", key2: "value2", key3: "value3" })
        }
    
        return largeArray
      }
    
      clearRows(n: number) {
    
      }
    
      mesureOperations(n: number) {
        this.measureTime(this.createRows)
        this.measureTime(this.updateAllRows)
        this.measureTime(this.partialUpdate)
        this.measureTime(this.selectRow)
        this.measureTime(this.swapRows)
        this.measureTime(this.removeRow)
      }
}
