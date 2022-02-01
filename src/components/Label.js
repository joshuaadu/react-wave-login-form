const Label = (props) => {
  // For each label wrap every letter in a span element
  // with a transition delay to create the animation
  let labelText = [...props.children];
  let animatedLabel = labelText.map((letter, idx) => {
    return <span style={{ transitionDelay: `${idx * 50}ms` }}>{letter}</span>;
  });
  console.log("label text: ", labelText);
  console.log("Animated Label: ", animatedLabel);

  return <label className={props.className}>{animatedLabel}</label>;
};

export default Label;
