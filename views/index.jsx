const React = require('react')
const Default = require('./layouts/Default')

function Index ({breads})  {
    return (
      <Default>
        <h2>Index Page</h2>
        <div className="newButton">
          <a href="/breads/new">
            <button>Add a new bread</button>
          </a>
        </div>

        {/* <p>I have {breads.name} bread!</p> */}
        <ul>
          {breads.map((bread) => {
            return (
              <li key={bread.id}>
                <a href={`/breads/${bread.id}`}>{bread.name}</a>
              </li>
            );
          })}
        </ul>
      </Default>
    );
}

module.exports = Index

