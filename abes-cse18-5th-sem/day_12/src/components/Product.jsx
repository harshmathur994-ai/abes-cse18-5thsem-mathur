
import React from 'react'

const Product = ({ products }) => {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "20px",
      padding: "20px",
      backgroundColor: "#F8FAFC"
    }}>

      {products.map((product) => {
        return (
          <div key={product.id} style={{
            border: "2px solid black",
            borderRadius: "10px",
            textAlign: "center",
            padding: "15px",
            backgroundColor: "#FFFFFF",
            boxSizing: "border-box"
          }}>

            <img
              src={product.thumbnail}
              alt={product.title}
              style={{
                width: "100%",
                height: "160px",
                objectFit: "contain",
                backgroundColor: "#F3EEFF",
                borderRadius: "8px"
              }}
            />

            <h3 style={{
              color: "#061B33",
              fontSize: "18px"
            }}>
              {product.title}
            </h3>

            <p style={{
              color: "#555555",
              fontSize: "13px",
              lineHeight: "1.5"
            }}>
              {product.description}
            </p>

            <h2 style={{
              color: "#FB9A1E"
            }}>
              ${product.price}
            </h2>

            <p style={{
              backgroundColor: "#D9FFF1",
              color: "#20B685",
              padding: "7px",
              borderRadius: "5px"
            }}>
              ⭐ Rating: {product.rating}
            </p>

            <button style={{
              backgroundColor: "#FB9A1E",
              color: "#061B33",
              border: "none",
              borderRadius: "6px",
              padding: "10px",
              width: "100%",
              fontWeight: "bold",
              cursor: "pointer"
            }}>
              Add to Cart
            </button>

          </div>
        )
      })}

    </div>
  )
}

export default Product
