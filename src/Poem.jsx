const poem = {
    lines: [
      'I write, erase, rewrite',
      'Erase again, and then',
      'A poppy blooms.'
    ]
  };
  
  // List with a separator 
// This example renders a famous haiku by Tachibana Hokushi, with each line wrapped in a <p> tag. Your job is to insert an <hr /> separator between each paragraph. Your resulting structure should look like this:

// <article>
//   <p>I write, erase, rewrite</p>
//   <hr />
//   <p>Erase again, and then</p>
//   <hr />
//   <p>A poppy blooms.</p>
// </article>
// A haiku only contains three lines, but your solution should work with any number of lines. Note that <hr /> elements only appear between the <p> elements, not in the beginning or the end!



  export default function Poem() {
    return (
      <article>
        {poem.lines.map((line, index) =>
          <p key={index}>
            {line}{index < poem.lines.length - 1 && <hr />}
          </p>
        )}
      </article>
    );
  }
  