'use client'

import { useState } from 'react'
import styles from './page.module.css'

type DataStructure = 'array' | 'stack' | 'queue' | 'linkedlist' | 'tree' | 'graph'

export default function Home() {
  const [selectedDS, setSelectedDS] = useState<DataStructure>('array')
  const [arrayData, setArrayData] = useState<number[]>([5, 3, 8, 1, 9])
  const [stackData, setStackData] = useState<number[]>([10, 20, 30])
  const [queueData, setQueueData] = useState<number[]>([1, 2, 3, 4])
  const [linkedListData, setLinkedListData] = useState<number[]>([7, 14, 21, 28])
  const [treeData, setTreeData] = useState<number[]>([50, 30, 70, 20, 40, 60, 80])
  const [inputValue, setInputValue] = useState('')

  const handleAdd = () => {
    const value = parseInt(inputValue)
    if (isNaN(value)) return

    switch (selectedDS) {
      case 'array':
        setArrayData([...arrayData, value])
        break
      case 'stack':
        setStackData([...stackData, value])
        break
      case 'queue':
        setQueueData([...queueData, value])
        break
      case 'linkedlist':
        setLinkedListData([...linkedListData, value])
        break
      case 'tree':
        setTreeData([...treeData, value])
        break
    }
    setInputValue('')
  }

  const handleRemove = () => {
    switch (selectedDS) {
      case 'array':
        setArrayData(arrayData.slice(0, -1))
        break
      case 'stack':
        setStackData(stackData.slice(0, -1))
        break
      case 'queue':
        setQueueData(queueData.slice(1))
        break
      case 'linkedlist':
        setLinkedListData(linkedListData.slice(0, -1))
        break
      case 'tree':
        setTreeData(treeData.slice(0, -1))
        break
    }
  }

  const getCurrentData = () => {
    switch (selectedDS) {
      case 'array':
        return arrayData
      case 'stack':
        return stackData
      case 'queue':
        return queueData
      case 'linkedlist':
        return linkedListData
      case 'tree':
        return treeData
      default:
        return []
    }
  }

  const renderVisualization = () => {
    const data = getCurrentData()

    switch (selectedDS) {
      case 'array':
        return (
          <div className={styles.arrayContainer}>
            {data.map((item, index) => (
              <div key={index} className={styles.arrayCell}>
                <div className={styles.arrayIndex}>{index}</div>
                <div className={styles.arrayValue}>{item}</div>
              </div>
            ))}
          </div>
        )

      case 'stack':
        return (
          <div className={styles.stackContainer}>
            {[...data].reverse().map((item, index) => (
              <div
                key={index}
                className={`${styles.stackItem} ${
                  index === 0 ? styles.stackTop : ''
                }`}
              >
                {item}
                {index === 0 && <span className={styles.stackLabel}>TOP</span>}
              </div>
            ))}
          </div>
        )

      case 'queue':
        return (
          <div className={styles.queueContainer}>
            <div className={styles.queueLabel}>FRONT →</div>
            {data.map((item, index) => (
              <div key={index} className={styles.queueItem}>
                {item}
              </div>
            ))}
            <div className={styles.queueLabel}>← REAR</div>
          </div>
        )

      case 'linkedlist':
        return (
          <div className={styles.linkedListContainer}>
            {data.map((item, index) => (
              <div key={index} className={styles.linkedListNode}>
                <div className={styles.nodeValue}>{item}</div>
                {index < data.length - 1 && (
                  <div className={styles.nodeArrow}>→</div>
                )}
              </div>
            ))}
            <div className={styles.nodeNull}>null</div>
          </div>
        )

      case 'tree':
        return (
          <div className={styles.treeContainer}>
            <div className={styles.treeLevel}>
              {data[0] !== undefined && (
                <div className={styles.treeNode}>{data[0]}</div>
              )}
            </div>
            <div className={styles.treeLevel}>
              {data[1] !== undefined && (
                <div className={styles.treeNode}>{data[1]}</div>
              )}
              {data[2] !== undefined && (
                <div className={styles.treeNode}>{data[2]}</div>
              )}
            </div>
            <div className={styles.treeLevel}>
              {data[3] !== undefined && (
                <div className={styles.treeNode}>{data[3]}</div>
              )}
              {data[4] !== undefined && (
                <div className={styles.treeNode}>{data[4]}</div>
              )}
              {data[5] !== undefined && (
                <div className={styles.treeNode}>{data[5]}</div>
              )}
              {data[6] !== undefined && (
                <div className={styles.treeNode}>{data[6]}</div>
              )}
            </div>
          </div>
        )

      default:
        return null
    }
  }

  const getDescription = () => {
    switch (selectedDS) {
      case 'array':
        return 'Array: A contiguous collection of elements accessed by index. O(1) access, O(n) insertion/deletion.'
      case 'stack':
        return 'Stack: LIFO (Last In, First Out) structure. Push and pop from the top. O(1) operations.'
      case 'queue':
        return 'Queue: FIFO (First In, First Out) structure. Enqueue at rear, dequeue from front. O(1) operations.'
      case 'linkedlist':
        return 'Linked List: Nodes connected via pointers. O(1) insertion at head, O(n) search and access.'
      case 'tree':
        return 'Binary Tree: Hierarchical structure where each node has up to 2 children. O(log n) operations in balanced trees.'
      default:
        return ''
    }
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Data Structures Visualizer</h1>
        <p className={styles.subtitle}>Interactive learning tool for common data structures</p>
      </header>

      <div className={styles.main}>
        <div className={styles.sidebar}>
          <h2 className={styles.sidebarTitle}>Select Structure</h2>
          <button
            className={`${styles.dsButton} ${
              selectedDS === 'array' ? styles.active : ''
            }`}
            onClick={() => setSelectedDS('array')}
          >
            Array
          </button>
          <button
            className={`${styles.dsButton} ${
              selectedDS === 'stack' ? styles.active : ''
            }`}
            onClick={() => setSelectedDS('stack')}
          >
            Stack
          </button>
          <button
            className={`${styles.dsButton} ${
              selectedDS === 'queue' ? styles.active : ''
            }`}
            onClick={() => setSelectedDS('queue')}
          >
            Queue
          </button>
          <button
            className={`${styles.dsButton} ${
              selectedDS === 'linkedlist' ? styles.active : ''
            }`}
            onClick={() => setSelectedDS('linkedlist')}
          >
            Linked List
          </button>
          <button
            className={`${styles.dsButton} ${
              selectedDS === 'tree' ? styles.active : ''
            }`}
            onClick={() => setSelectedDS('tree')}
          >
            Binary Tree
          </button>
        </div>

        <div className={styles.content}>
          <div className={styles.description}>{getDescription()}</div>

          <div className={styles.visualization}>{renderVisualization()}</div>

          <div className={styles.controls}>
            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter a number"
              className={styles.input}
              onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
            />
            <button onClick={handleAdd} className={styles.addButton}>
              Add {selectedDS === 'stack' ? '(Push)' : selectedDS === 'queue' ? '(Enqueue)' : ''}
            </button>
            <button onClick={handleRemove} className={styles.removeButton}>
              Remove {selectedDS === 'stack' ? '(Pop)' : selectedDS === 'queue' ? '(Dequeue)' : ''}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
