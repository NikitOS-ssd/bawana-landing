import styles from "./Block.module.css"

export default function Block({ title, children }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h1 className={`${styles.main_block_title} font-semibold mb-6 text-gray-800`}>
        {title}
      </h1>
      {
        children
      }
    </div>
  );
}
