import React from 'react';
import styles from './styles.module.css'

function LoadMoreButton({ isFetchingNextPage, hasNextPage, fetchNextPage }) {
  return (
    // ButtonBox start
    <div className={styles.btnBox}>
      <button className={styles.btn}
        onClick={() => fetchNextPage()}
        isloading={isFetchingNextPage ? "true" : "false"}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage
          ? 'Loading more...'
          : hasNextPage
            ? 'Load More'
            : 'Nothing more to load'}
      </button>
    </div>
    // ButtonBox end

  )
}

export default LoadMoreButton;