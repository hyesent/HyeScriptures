// src/data/games/rapid-fire.ts

export interface RapidFireQuestion {
  id: string;
  statement: string;
  isTrue: boolean;
  explanation: string;
  category?: 'old-testament' | 'new-testament' | 'characters' | 'places' | 'books' | 'jesus' | 'apostles' | 'miracles' | 'prophets' | 'law' | 'history' | 'mixed' | 'kings' | 'judges' | 'women' | 'parables' | 'epistles' | 'psalms' | 'proverbs' | 'angels' | 'exodus' | 'creation' | 'covenants' | 'feasts' | 'worship' | 'prayer' | 'end-times';
  difficulty?: 'easy' | 'medium' | 'hard' | 'expert';
}

export const rapidFireQuestions: RapidFireQuestion[] = [
  // ================================================================
  // SECTION 1: CREATION & EARLY HISTORY (20 questions)
  // ================================================================
  { id: 'r1', statement: 'God created the heavens and the earth in six days', isTrue: true, explanation: 'Genesis 1:1-31 describes the six days of creation', category: 'creation', difficulty: 'easy' },
  { id: 'r2', statement: 'Adam was the first man created by God', isTrue: true, explanation: 'God created Adam from the dust of the ground', category: 'creation', difficulty: 'easy' },
  { id: 'r3', statement: 'Eve was created from Adam\'s rib', isTrue: true, explanation: 'God formed Eve from Adam\'s rib', category: 'creation', difficulty: 'easy' },
  { id: 'r4', statement: 'The Garden of Eden was located in the east', isTrue: true, explanation: 'The Garden of Eden was in the east (Genesis 2:8)', category: 'creation', difficulty: 'medium' },
  { id: 'r5', statement: 'Adam and Eve ate from the Tree of Life', isTrue: false, explanation: 'They ate from the Tree of Knowledge of Good and Evil', category: 'creation', difficulty: 'medium' },
  { id: 'r6', statement: 'Cain and Abel were the sons of Adam and Eve', isTrue: true, explanation: 'Cain and Abel were their first two sons', category: 'creation', difficulty: 'easy' },
  { id: 'r7', statement: 'Cain killed his brother Abel', isTrue: true, explanation: 'Cain murdered Abel out of jealousy', category: 'creation', difficulty: 'easy' },
  { id: 'r8', statement: 'Enoch walked with God and was taken by Him', isTrue: true, explanation: 'Enoch pleased God and was taken (Genesis 5:24)', category: 'creation', difficulty: 'medium' },
  { id: 'r9', statement: 'Noah built an ark to survive the flood', isTrue: true, explanation: 'Noah built the ark according to God\'s instructions', category: 'creation', difficulty: 'easy' },
  { id: 'r10', statement: 'The flood lasted for 40 days and 40 nights', isTrue: true, explanation: 'The rain fell for 40 days and 40 nights (Genesis 7:12)', category: 'creation', difficulty: 'easy' },
  { id: 'r11', statement: 'Noah sent out a dove to find dry land', isTrue: true, explanation: 'Noah sent out a dove three times', category: 'creation', difficulty: 'easy' },
  { id: 'r12', statement: 'The rainbow was a sign of God\'s promise', isTrue: true, explanation: 'The rainbow was a sign that God would never flood the earth again', category: 'creation', difficulty: 'easy' },
  { id: 'r13', statement: 'The Tower of Babel was built to reach heaven', isTrue: true, explanation: 'People built the tower to make a name for themselves', category: 'creation', difficulty: 'easy' },
  { id: 'r14', statement: 'God confused languages at Babel', isTrue: true, explanation: 'God caused the people to speak different languages', category: 'creation', difficulty: 'easy' },
  { id: 'r15', statement: 'Methuselah lived to be 969 years old', isTrue: true, explanation: 'Methuselah was the oldest person in the Bible', category: 'creation', difficulty: 'medium' },
  { id: 'r16', statement: 'Eve was the first woman', isTrue: true, explanation: 'Eve was the first woman created by God', category: 'creation', difficulty: 'easy' },
  { id: 'r17', statement: 'The serpent deceived Eve in the garden', isTrue: true, explanation: 'The serpent deceived Eve and she ate the forbidden fruit', category: 'creation', difficulty: 'easy' },
  { id: 'r18', statement: 'Adam and Eve were expelled from the garden', isTrue: true, explanation: 'They were banished from the Garden of Eden after sinning', category: 'creation', difficulty: 'easy' },
  { id: 'r19', statement: 'The first murder was committed by Cain', isTrue: true, explanation: 'Cain murdered his brother Abel', category: 'creation', difficulty: 'easy' },
  { id: 'r20', statement: 'Noah was a preacher of righteousness', isTrue: true, explanation: 'Noah preached righteousness to his generation', category: 'creation', difficulty: 'medium' },

  // ================================================================
  // SECTION 2: PATRIARCHS & COVENANTS (25 questions)
  // ================================================================
  { id: 'r21', statement: 'Abraham was called from Ur of the Chaldeans', isTrue: true, explanation: 'God called Abraham to leave his homeland', category: 'covenants', difficulty: 'easy' },
  { id: 'r22', statement: 'Abraham\'s name was changed from Abram', isTrue: true, explanation: 'God changed Abram\'s name to Abraham', category: 'covenants', difficulty: 'easy' },
  { id: 'r23', statement: 'Sarah was Abraham\'s wife', isTrue: true, explanation: 'Sarah was Abraham\'s wife and the mother of Isaac', category: 'covenants', difficulty: 'easy' },
  { id: 'r24', statement: 'Hagar was Sarah\'s servant', isTrue: true, explanation: 'Hagar was Sarah\'s Egyptian servant', category: 'covenants', difficulty: 'medium' },
  { id: 'r25', statement: 'Ishmael was Abraham\'s son through Hagar', isTrue: true, explanation: 'Hagar gave birth to Ishmael, Abraham\'s first son', category: 'covenants', difficulty: 'easy' },
  { id: 'r26', statement: 'Isaac was the son of Abraham and Sarah', isTrue: true, explanation: 'Isaac was the promised son', category: 'covenants', difficulty: 'easy' },
  { id: 'r27', statement: 'Abraham was willing to sacrifice Isaac', isTrue: true, explanation: 'Abraham was willing to sacrifice Isaac in obedience to God', category: 'covenants', difficulty: 'easy' },
  { id: 'r28', statement: 'God provided a ram as a substitute sacrifice', isTrue: true, explanation: 'God provided a ram caught in a thicket', category: 'covenants', difficulty: 'easy' },
  { id: 'r29', statement: 'Rebekah was Isaac\'s wife', isTrue: true, explanation: 'Rebekah became Isaac\'s wife', category: 'covenants', difficulty: 'easy' },
  { id: 'r30', statement: 'Jacob was Isaac\'s son', isTrue: true, explanation: 'Jacob was the son of Isaac and Rebekah', category: 'covenants', difficulty: 'easy' },
  { id: 'r31', statement: 'Esau was Jacob\'s brother', isTrue: true, explanation: 'Esau and Jacob were twins', category: 'covenants', difficulty: 'easy' },
  { id: 'r32', statement: 'Jacob tricked Esau out of his birthright', isTrue: true, explanation: 'Jacob bought Esau\'s birthright for a bowl of stew', category: 'covenants', difficulty: 'medium' },
  { id: 'r33', statement: 'Jacob wrestled with an angel', isTrue: true, explanation: 'Jacob wrestled with a divine being and was renamed Israel', category: 'covenants', difficulty: 'easy' },
  { id: 'r34', statement: 'Jacob was renamed Israel', isTrue: true, explanation: 'Jacob\'s name was changed to Israel after wrestling with God', category: 'covenants', difficulty: 'easy' },
  { id: 'r35', statement: 'Israel had 12 sons', isTrue: true, explanation: 'Jacob/Israel had 12 sons who became the 12 tribes', category: 'covenants', difficulty: 'easy' },
  { id: 'r36', statement: 'Joseph was Jacob\'s favorite son', isTrue: true, explanation: 'Joseph was loved more by Jacob than his other sons', category: 'covenants', difficulty: 'easy' },
  { id: 'r37', statement: 'Joseph was sold into slavery by his brothers', isTrue: true, explanation: 'His brothers sold him for 20 pieces of silver', category: 'covenants', difficulty: 'easy' },
  { id: 'r38', statement: 'Joseph became ruler in Egypt', isTrue: true, explanation: 'Joseph rose to power and became second to Pharaoh', category: 'covenants', difficulty: 'easy' },
  { id: 'r39', statement: 'Joseph\'s family moved to Egypt during a famine', isTrue: true, explanation: 'Jacob and his family moved to Egypt to survive the famine', category: 'covenants', difficulty: 'easy' },
  { id: 'r40', statement: 'The covenant with Abraham promised land and descendants', isTrue: true, explanation: 'God promised Abraham land and countless descendants', category: 'covenants', difficulty: 'medium' },
  { id: 'r41', statement: 'The covenant was sealed with circumcision', isTrue: true, explanation: 'Circumcision was the sign of the covenant', category: 'covenants', difficulty: 'medium' },
  { id: 'r42', statement: 'Abraham is called the "father of many nations"', isTrue: true, explanation: 'Abraham is the father of the Jewish and Arab peoples', category: 'covenants', difficulty: 'easy' },
  { id: 'r43', statement: 'Lot was Abraham\'s nephew', isTrue: true, explanation: 'Lot was the son of Abraham\'s brother Haran', category: 'covenants', difficulty: 'easy' },
  { id: 'r44', statement: 'Abraham interceded for Sodom', isTrue: true, explanation: 'Abraham pleaded with God to spare Sodom', category: 'covenants', difficulty: 'medium' },
  { id: 'r45', statement: 'Sarah laughed when she heard she would have a child', isTrue: true, explanation: 'Sarah laughed because she was old and barren', category: 'covenants', difficulty: 'easy' },

  // ================================================================
  // SECTION 3: EXODUS & WILDERNESS (30 questions)
  // ================================================================
  { id: 'r46', statement: 'Moses was born in Egypt', isTrue: true, explanation: 'Moses was born during the Israelites\' slavery in Egypt', category: 'exodus', difficulty: 'easy' },
  { id: 'r47', statement: 'Moses was hidden in a basket in the Nile', isTrue: true, explanation: 'Moses\' mother hid him in a basket to save his life', category: 'exodus', difficulty: 'easy' },
  { id: 'r48', statement: 'Moses was raised by Pharaoh\'s daughter', isTrue: true, explanation: 'Pharaoh\'s daughter adopted Moses and raised him', category: 'exodus', difficulty: 'easy' },
  { id: 'r49', statement: 'Moses fled to Midian after killing an Egyptian', isTrue: true, explanation: 'Moses fled to Midian where he married Zipporah', category: 'exodus', difficulty: 'medium' },
  { id: 'r50', statement: 'Moses saw the burning bush on Mount Sinai', isTrue: true, explanation: 'God appeared to Moses in a burning bush on Mount Horeb/Sinai', category: 'exodus', difficulty: 'easy' },
  { id: 'r51', statement: 'God told Moses His name was "I AM"', isTrue: true, explanation: 'God revealed His name as "I AM WHO I AM"', category: 'exodus', difficulty: 'easy' },
  { id: 'r52', statement: 'Aaron was Moses\' brother', isTrue: true, explanation: 'Aaron was Moses\' brother and spokesman', category: 'exodus', difficulty: 'easy' },
  { id: 'r53', statement: 'The ten plagues were sent upon Egypt', isTrue: true, explanation: 'God sent ten plagues to persuade Pharaoh to free Israel', category: 'exodus', difficulty: 'easy' },
  { id: 'r54', statement: 'The first plague was turning water to blood', isTrue: true, explanation: 'The Nile was turned to blood', category: 'exodus', difficulty: 'medium' },
  { id: 'r55', statement: 'The final plague was the death of the firstborn', isTrue: true, explanation: 'The firstborn of Egypt died unless there was lamb\'s blood on the door', category: 'exodus', difficulty: 'easy' },
  { id: 'r56', statement: 'The Passover was instituted before the Exodus', isTrue: true, explanation: 'The Passover was established as a memorial', category: 'exodus', difficulty: 'medium' },
  { id: 'r57', statement: 'The Israelites were in slavery in Egypt for 400 years', isTrue: true, explanation: 'The Israelites were slaves in Egypt for about 400 years', category: 'exodus', difficulty: 'hard' },
  { id: 'r58', statement: 'The Red Sea was parted for the Israelites', isTrue: true, explanation: 'Moses parted the Red Sea and the Israelites crossed on dry land', category: 'exodus', difficulty: 'easy' },
  { id: 'r59', statement: 'Pharaoh\'s army drowned in the Red Sea', isTrue: true, explanation: 'The pursuing Egyptian army was destroyed by the returning waters', category: 'exodus', difficulty: 'easy' },
  { id: 'r60', statement: 'The Israelites complained about lack of food', isTrue: true, explanation: 'They complained about hunger and God gave them manna', category: 'exodus', difficulty: 'easy' },
  { id: 'r61', statement: 'God provided manna in the wilderness', isTrue: true, explanation: 'Manna was the bread from heaven', category: 'exodus', difficulty: 'easy' },
  { id: 'r62', statement: 'God provided water from a rock', isTrue: true, explanation: 'Moses struck the rock and water came out', category: 'exodus', difficulty: 'easy' },
  { id: 'r63', statement: 'The Ten Commandments were given at Mount Sinai', isTrue: true, explanation: 'God gave the Law to Moses on Mount Sinai', category: 'law', difficulty: 'easy' },
  { id: 'r64', statement: 'The Ten Commandments were written on stone', isTrue: true, explanation: 'God wrote the commandments on two stone tablets', category: 'law', difficulty: 'easy' },
  { id: 'r65', statement: 'Moses broke the first set of tablets', isTrue: true, explanation: 'Moses broke the tablets after seeing the golden calf', category: 'exodus', difficulty: 'easy' },
  { id: 'r66', statement: 'The golden calf was made by Aaron', isTrue: true, explanation: 'Aaron made the golden calf while Moses was on the mountain', category: 'exodus', difficulty: 'easy' },
  { id: 'r67', statement: 'The Tabernacle was built in the wilderness', isTrue: true, explanation: 'The Tabernacle was constructed according to God\'s instructions', category: 'exodus', difficulty: 'medium' },
  { id: 'r68', statement: 'The Ark of the Covenant was kept in the Tabernacle', isTrue: true, explanation: 'The Ark was placed in the Most Holy Place', category: 'exodus', difficulty: 'medium' },
  { id: 'r69', statement: 'Moses sent 12 spies into Canaan', isTrue: true, explanation: 'Moses sent 12 spies to explore the Promised Land', category: 'exodus', difficulty: 'easy' },
  { id: 'r70', statement: 'Joshua and Caleb were the only faithful spies', isTrue: true, explanation: 'Joshua and Caleb trusted God to give them the land', category: 'exodus', difficulty: 'medium' },
  { id: 'r71', statement: 'The Israelites wandered for 40 years', isTrue: true, explanation: 'They wandered for 40 years because of their unbelief', category: 'exodus', difficulty: 'easy' },
  { id: 'r72', statement: 'Moses died on Mount Nebo', isTrue: true, explanation: 'Moses saw the Promised Land from Mount Nebo before he died', category: 'exodus', difficulty: 'medium' },
  { id: 'r73', statement: 'Joshua led the Israelites into the Promised Land', isTrue: true, explanation: 'Joshua succeeded Moses and led the conquest of Canaan', category: 'exodus', difficulty: 'easy' },
  { id: 'r74', statement: 'The Israelites crossed the Jordan River on dry ground', isTrue: true, explanation: 'The Jordan was parted just as the Red Sea had been', category: 'exodus', difficulty: 'medium' },
  { id: 'r75', statement: 'Moses was the most humble man on earth', isTrue: true, explanation: 'The Bible says Moses was very humble (Numbers 12:3)', category: 'exodus', difficulty: 'hard' },

  // ================================================================
  // SECTION 4: JUDGES & RUTH (20 questions)
  // ================================================================
  { id: 'r76', statement: 'Joshua led the conquest of Canaan', isTrue: true, explanation: 'Joshua led the Israelites into the Promised Land', category: 'judges', difficulty: 'easy' },
  { id: 'r77', statement: 'The walls of Jericho fell after marching', isTrue: true, explanation: 'The walls fell after seven days of marching', category: 'judges', difficulty: 'easy' },
  { id: 'r78', statement: 'Rahab was a prostitute who helped the spies', isTrue: true, explanation: 'Rahab hid the spies and was spared', category: 'judges', difficulty: 'easy' },
  { id: 'r79', statement: 'Rahab was an ancestor of Jesus', isTrue: true, explanation: 'Rahab is listed in the genealogy of Jesus', category: 'judges', difficulty: 'hard' },
  { id: 'r80', statement: 'Deborah was a judge and prophetess', isTrue: true, explanation: 'Deborah led Israel as a judge', category: 'judges', difficulty: 'easy' },
  { id: 'r81', statement: 'Gideon defeated the Midianites with 300 men', isTrue: true, explanation: 'Gideon\'s army of 300 defeated the Midianites', category: 'judges', difficulty: 'easy' },
  { id: 'r82', statement: 'Samson had supernatural strength', isTrue: true, explanation: 'Samson\'s strength came from his Nazirite vow', category: 'judges', difficulty: 'easy' },
  { id: 'r83', statement: 'Delilah betrayed Samson', isTrue: true, explanation: 'Delilah was bribed to discover the secret of Samson\'s strength', category: 'judges', difficulty: 'easy' },
  { id: 'r84', statement: 'Samson killed 1,000 Philistines with a jawbone', isTrue: true, explanation: 'Samson killed 1,000 Philistines with the jawbone of a donkey', category: 'judges', difficulty: 'medium' },
  { id: 'r85', statement: 'Samson died by destroying the Philistine temple', isTrue: true, explanation: 'Samson pushed down the pillars of the temple', category: 'judges', difficulty: 'easy' },
  { id: 'r86', statement: 'Ruth was a Moabite', isTrue: true, explanation: 'Ruth came from Moab but followed Naomi', category: 'judges', difficulty: 'easy' },
  { id: 'r87', statement: 'Naomi was Ruth\'s mother-in-law', isTrue: true, explanation: 'Naomi was the mother of Ruth\'s husband', category: 'judges', difficulty: 'easy' },
  { id: 'r88', statement: 'Ruth married Boaz', isTrue: true, explanation: 'Ruth married Boaz, a wealthy relative', category: 'judges', difficulty: 'easy' },
  { id: 'r89', statement: 'Boaz was the grandfather of King David', isTrue: true, explanation: 'Ruth and Boaz were the great-grandparents of David', category: 'judges', difficulty: 'hard' },
  { id: 'r90', statement: 'Ruth is in the genealogy of Jesus', isTrue: true, explanation: 'Ruth is included in the genealogy of Jesus in Matthew', category: 'judges', difficulty: 'hard' },
  { id: 'r91', statement: 'The Book of Ruth is set during the time of the judges', isTrue: true, explanation: 'The story of Ruth takes place during the time of the judges', category: 'judges', difficulty: 'medium' },
  { id: 'r92', statement: 'Samson was a Nazirite from birth', isTrue: true, explanation: 'Samson was dedicated as a Nazirite before his birth', category: 'judges', difficulty: 'medium' },
  { id: 'r93', statement: 'Gideon put out a fleece to test God', isTrue: true, explanation: 'Gideon asked for a sign using a fleece', category: 'judges', difficulty: 'easy' },
  { id: 'r94', statement: 'Jephthah made a foolish vow', isTrue: true, explanation: 'Jephthah vowed to sacrifice whatever came out of his house', category: 'judges', difficulty: 'hard' },
  { id: 'r95', statement: 'The book of Judges describes a cycle of sin', isTrue: true, explanation: 'Israel sinned, were oppressed, cried out, and were delivered', category: 'judges', difficulty: 'medium' },

  // ================================================================
  // SECTION 5: KINGS OF ISRAEL (25 questions)
  // ================================================================
  { id: 'r96', statement: 'Samuel was the last judge of Israel', isTrue: true, explanation: 'Samuel was the final judge before the monarchy', category: 'kings', difficulty: 'easy' },
  { id: 'r97', statement: 'Saul was the first king of Israel', isTrue: true, explanation: 'Saul was anointed as the first king', category: 'kings', difficulty: 'easy' },
  { id: 'r98', statement: 'David was the second king of Israel', isTrue: true, explanation: 'David succeeded Saul as king', category: 'kings', difficulty: 'easy' },
  { id: 'r99', statement: 'David killed Goliath with a sling and stone', isTrue: true, explanation: 'David defeated the Philistine giant with a sling', category: 'kings', difficulty: 'easy' },
  { id: 'r100', statement: 'David was a man after God\'s own heart', isTrue: true, explanation: 'God called David a man after His own heart', category: 'kings', difficulty: 'easy' },
  { id: 'r101', statement: 'David wrote many of the Psalms', isTrue: true, explanation: 'David was the primary author of the Psalms', category: 'psalms', difficulty: 'easy' },
  { id: 'r102', statement: 'David committed adultery with Bathsheba', isTrue: true, explanation: 'David sinned with Bathsheba', category: 'kings', difficulty: 'easy' },
  { id: 'r103', statement: 'David had Uriah killed in battle', isTrue: true, explanation: 'David arranged for Uriah to be killed to cover his sin', category: 'kings', difficulty: 'easy' },
  { id: 'r104', statement: 'Nathan confronted David about his sin', isTrue: true, explanation: 'The prophet Nathan confronted David\'s adultery', category: 'kings', difficulty: 'easy' },
  { id: 'r105', statement: 'Solomon was David\'s son', isTrue: true, explanation: 'Solomon was David\'s son through Bathsheba', category: 'kings', difficulty: 'easy' },
  { id: 'r106', statement: 'Solomon built the Temple in Jerusalem', isTrue: true, explanation: 'Solomon built the First Temple', category: 'kings', difficulty: 'easy' },
  { id: 'r107', statement: 'Solomon was known for his wisdom', isTrue: true, explanation: 'Solomon was the wisest king who ever lived', category: 'kings', difficulty: 'easy' },
  { id: 'r108', statement: 'The Queen of Sheba visited Solomon', isTrue: true, explanation: 'The Queen of Sheba came to test Solomon\'s wisdom', category: 'kings', difficulty: 'easy' },
  { id: 'r109', statement: 'Solomon had 700 wives', isTrue: true, explanation: 'Solomon\'s many wives turned his heart away from God', category: 'kings', difficulty: 'medium' },
  { id: 'r110', statement: 'The kingdom divided after Solomon\'s death', isTrue: true, explanation: 'Israel split into north and south', category: 'kings', difficulty: 'easy' },
  { id: 'r111', statement: 'Rehoboam was Solomon\'s son', isTrue: true, explanation: 'Rehoboam succeeded Solomon as king', category: 'kings', difficulty: 'medium' },
  { id: 'r112', statement: 'The northern kingdom was called Israel', isTrue: true, explanation: 'The northern kingdom kept the name Israel', category: 'kings', difficulty: 'easy' },
  { id: 'r113', statement: 'The southern kingdom was called Judah', isTrue: true, explanation: 'The southern kingdom was Judah', category: 'kings', difficulty: 'easy' },
  { id: 'r114', statement: 'Jeroboam was the first king of the northern kingdom', isTrue: true, explanation: 'Jeroboam led the northern tribes after the division', category: 'kings', difficulty: 'medium' },
  { id: 'r115', statement: 'King Hezekiah trusted God', isTrue: true, explanation: 'Hezekiah was a good king who trusted God', category: 'kings', difficulty: 'easy' },
  { id: 'r116', statement: 'King Josiah found the Book of the Law', isTrue: true, explanation: 'Josiah discovered the Law and led a revival', category: 'kings', difficulty: 'easy' },
  { id: 'r117', statement: 'The northern kingdom was destroyed by Assyria', isTrue: true, explanation: 'Assyria conquered Israel in 722 BC', category: 'kings', difficulty: 'hard' },
  { id: 'r118', statement: 'The southern kingdom was destroyed by Babylon', isTrue: true, explanation: 'Babylon conquered Judah in 586 BC', category: 'kings', difficulty: 'hard' },
  { id: 'r119', statement: 'David was a shepherd before becoming king', isTrue: true, explanation: 'David tended sheep before being anointed', category: 'kings', difficulty: 'easy' },
  { id: 'r120', statement: 'Jonathan was David\'s best friend', isTrue: true, explanation: 'Jonathan and David had a deep friendship', category: 'kings', difficulty: 'easy' },

  // ================================================================
  // SECTION 6: PROPHETS (25 questions)
  // ================================================================
  { id: 'r121', statement: 'Elijah was a prophet of God', isTrue: true, explanation: 'Elijah was one of the greatest prophets', category: 'prophets', difficulty: 'easy' },
  { id: 'r122', statement: 'Elijah was taken to heaven in a whirlwind', isTrue: true, explanation: 'Elijah was taken up in a chariot of fire', category: 'prophets', difficulty: 'easy' },
  { id: 'r123', statement: 'Elisha was Elijah\'s successor', isTrue: true, explanation: 'Elisha received a double portion of Elijah\'s spirit', category: 'prophets', difficulty: 'easy' },
  { id: 'r124', statement: 'Elisha performed more miracles than Elijah', isTrue: true, explanation: 'Elisha performed twice as many miracles as Elijah', category: 'prophets', difficulty: 'hard' },
  { id: 'r125', statement: 'Isaiah prophesied the birth of the Messiah', isTrue: true, explanation: 'Isaiah prophesied about the virgin birth', category: 'prophets', difficulty: 'easy' },
  { id: 'r126', statement: 'Isaiah saw the Lord high and lifted up', isTrue: true, explanation: 'Isaiah had a vision of God in the temple', category: 'prophets', difficulty: 'easy' },
  { id: 'r127', statement: 'Jeremiah was called the "weeping prophet"', isTrue: true, explanation: 'Jeremiah wept over Jerusalem\'s destruction', category: 'prophets', difficulty: 'easy' },
  { id: 'r128', statement: 'Jeremiah wrote the book of Lamentations', isTrue: true, explanation: 'Jeremiah wrote Lamentations after Jerusalem fell', category: 'prophets', difficulty: 'medium' },
  { id: 'r129', statement: 'Ezekiel had a vision of dry bones', isTrue: true, explanation: 'Ezekiel saw the valley of dry bones come to life', category: 'prophets', difficulty: 'easy' },
  { id: 'r130', statement: 'Ezekiel was a priest as well as a prophet', isTrue: true, explanation: 'Ezekiel was from a priestly family', category: 'prophets', difficulty: 'hard' },
  { id: 'r131', statement: 'Daniel was thrown into a den of lions', isTrue: true, explanation: 'Daniel was cast into the lion\'s den but was protected', category: 'prophets', difficulty: 'easy' },
  { id: 'r132', statement: 'Daniel interpreted Nebuchadnezzar\'s dream', isTrue: true, explanation: 'Daniel interpreted the king\'s dream of a great statue', category: 'prophets', difficulty: 'easy' },
  { id: 'r133', statement: 'Hosea married a prostitute as a symbol', isTrue: true, explanation: 'Hosea\'s marriage symbolized God\'s relationship with Israel', category: 'prophets', difficulty: 'medium' },
  { id: 'r134', statement: 'Jonah was swallowed by a great fish', isTrue: true, explanation: 'Jonah was swallowed by a great fish', category: 'prophets', difficulty: 'easy' },
  { id: 'r135', statement: 'Jonah preached to Nineveh', isTrue: true, explanation: 'Jonah delivered God\'s message to Nineveh', category: 'prophets', difficulty: 'easy' },
  { id: 'r136', statement: 'The people of Nineveh repented', isTrue: true, explanation: 'The Ninevites responded to Jonah\'s message', category: 'prophets', difficulty: 'easy' },
  { id: 'r137', statement: 'Micah prophesied the birth of the Messiah in Bethlehem', isTrue: true, explanation: 'Micah 5:2 prophesies the Messiah\'s birthplace', category: 'prophets', difficulty: 'hard' },
  { id: 'r138', statement: 'Amos was a shepherd and fig farmer', isTrue: true, explanation: 'Amos was called from tending sheep', category: 'prophets', difficulty: 'hard' },
  { id: 'r139', statement: 'Malachi was the last prophet of the Old Testament', isTrue: true, explanation: 'Malachi was the final Old Testament prophet', category: 'prophets', difficulty: 'medium' },
  { id: 'r140', statement: 'Zechariah had visions of a golden lampstand', isTrue: true, explanation: 'Zechariah saw a vision of a lampstand and olive trees', category: 'prophets', difficulty: 'hard' },
  { id: 'r141', statement: 'The prophets were also called "seers"', isTrue: true, explanation: 'Prophets were sometimes called seers', category: 'prophets', difficulty: 'medium' },
  { id: 'r142', statement: 'Elijah confronted the prophets of Baal on Mount Carmel', isTrue: true, explanation: 'Elijah challenged the prophets of Baal', category: 'prophets', difficulty: 'easy' },
  { id: 'r143', statement: 'Elisha healed Naaman of leprosy', isTrue: true, explanation: 'Elisha told Naaman to wash in the Jordan River', category: 'prophets', difficulty: 'medium' },
  { id: 'r144', statement: 'Isaiah prophesied the suffering servant', isTrue: true, explanation: 'Isaiah 53 describes the suffering servant', category: 'prophets', difficulty: 'medium' },
  { id: 'r145', statement: 'Daniel was taken captive to Babylon', isTrue: true, explanation: 'Daniel was exiled to Babylon as a youth', category: 'prophets', difficulty: 'easy' },

  // ================================================================
  // SECTION 7: PSALMS & PROVERBS (20 questions)
  // ================================================================
  { id: 'r146', statement: 'The book of Psalms is the longest book in the Bible', isTrue: true, explanation: 'Psalms has 150 chapters', category: 'psalms', difficulty: 'easy' },
  { id: 'r147', statement: 'Psalm 23 is about the Lord as a shepherd', isTrue: true, explanation: '"The Lord is my shepherd" is Psalm 23', category: 'psalms', difficulty: 'easy' },
  { id: 'r148', statement: 'Psalm 119 is the longest chapter in the Bible', isTrue: true, explanation: 'Psalm 119 has 176 verses', category: 'psalms', difficulty: 'medium' },
  { id: 'r149', statement: 'The Psalms were written mostly by David', isTrue: true, explanation: 'David wrote about 75 of the Psalms', category: 'psalms', difficulty: 'easy' },
  { id: 'r150', statement: 'The Psalms were used for worship in the Temple', isTrue: true, explanation: 'The Psalms were sung in Temple worship', category: 'psalms', difficulty: 'medium' },
  { id: 'r151', statement: 'Psalm 51 is a prayer of repentance by David', isTrue: true, explanation: 'David wrote Psalm 51 after his sin with Bathsheba', category: 'psalms', difficulty: 'medium' },
  { id: 'r152', statement: 'Psalm 23 mentions the "valley of the shadow of death"', isTrue: true, explanation: 'Psalm 23:4 speaks of the valley of the shadow of death', category: 'psalms', difficulty: 'easy' },
  { id: 'r153', statement: 'Psalm 100 is a psalm of praise', isTrue: true, explanation: '"Make a joyful noise to the Lord"', category: 'psalms', difficulty: 'easy' },
  { id: 'r154', statement: 'Psalm 150 is about praising God with instruments', isTrue: true, explanation: 'Psalm 150 mentions trumpets, harps, and cymbals', category: 'psalms', difficulty: 'medium' },
  { id: 'r155', statement: 'The Psalms are divided into 5 books', isTrue: true, explanation: 'The Psalms are arranged in 5 books', category: 'psalms', difficulty: 'hard' },
  { id: 'r156', statement: 'Solomon wrote the book of Proverbs', isTrue: true, explanation: 'Solomon was the primary author of Proverbs', category: 'proverbs', difficulty: 'easy' },
  { id: 'r157', statement: 'Proverbs 1:7 says "The fear of the Lord is the beginning of knowledge"', isTrue: true, explanation: 'This is a key verse in Proverbs', category: 'proverbs', difficulty: 'easy' },
  { id: 'r158', statement: 'The wise woman is described in Proverbs 31', isTrue: true, explanation: 'Proverbs 31 describes a virtuous woman', category: 'proverbs', difficulty: 'easy' },
  { id: 'r159', statement: 'Proverbs was written to give wisdom', isTrue: true, explanation: 'The purpose of Proverbs is to give wisdom', category: 'proverbs', difficulty: 'easy' },
  { id: 'r160', statement: 'Solomon also wrote Ecclesiastes and Song of Solomon', isTrue: true, explanation: 'Solomon wrote these wisdom books', category: 'proverbs', difficulty: 'easy' },
  { id: 'r161', statement: 'Ecclesiastes says "Vanity of vanities, all is vanity"', isTrue: true, explanation: 'Ecclesiastes begins with this phrase', category: 'proverbs', difficulty: 'easy' },
  { id: 'r162', statement: 'Song of Solomon is a love poem', isTrue: true, explanation: 'Song of Solomon is a poetic love story', category: 'proverbs', difficulty: 'easy' },
  { id: 'r163', statement: 'Proverbs says "Trust in the Lord with all your heart"', isTrue: true, explanation: 'Proverbs 3:5 is a key verse on trust', category: 'proverbs', difficulty: 'easy' },
  { id: 'r164', statement: 'The fear of the Lord is a theme in Proverbs', isTrue: true, explanation: '"The fear of the Lord" appears throughout Proverbs', category: 'proverbs', difficulty: 'medium' },
  { id: 'r165', statement: 'Ecclesiastes was written by Solomon in his old age', isTrue: true, explanation: 'Solomon wrote Ecclesiastes as a reflection on life', category: 'proverbs', difficulty: 'hard' },

  // ================================================================
  // SECTION 8: WOMEN OF THE BIBLE (25 questions)
  // ================================================================
  { id: 'r166', statement: 'Eve was the first woman', isTrue: true, explanation: 'Eve was the first woman created by God', category: 'women', difficulty: 'easy' },
  { id: 'r167', statement: 'Sarah was Abraham\'s wife', isTrue: true, explanation: 'Sarah was the wife of Abraham', category: 'women', difficulty: 'easy' },
  { id: 'r168', statement: 'Hagar was the mother of Ishmael', isTrue: true, explanation: 'Hagar bore Abraham\'s first son', category: 'women', difficulty: 'easy' },
  { id: 'r169', statement: 'Rebekah was Isaac\'s wife', isTrue: true, explanation: 'Rebekah became the wife of Isaac', category: 'women', difficulty: 'easy' },
  { id: 'r170', statement: 'Rachel was Jacob\'s favorite wife', isTrue: true, explanation: 'Jacob loved Rachel more than Leah', category: 'women', difficulty: 'easy' },
  { id: 'r171', statement: 'Leah was also Jacob\'s wife', isTrue: true, explanation: 'Jacob married Leah as well as Rachel', category: 'women', difficulty: 'easy' },
  { id: 'r172', statement: 'Miriam was Moses\' sister', isTrue: true, explanation: 'Miriam was Moses\' sister', category: 'women', difficulty: 'easy' },
  { id: 'r173', statement: 'Miriam was a prophetess', isTrue: true, explanation: 'Miriam is called a prophetess', category: 'women', difficulty: 'medium' },
  { id: 'r174', statement: 'Deborah was a judge', isTrue: true, explanation: 'Deborah judged Israel and led them to victory', category: 'women', difficulty: 'easy' },
  { id: 'r175', statement: 'Ruth was a Moabite who followed Naomi', isTrue: true, explanation: 'Ruth left her people to follow Naomi and God', category: 'women', difficulty: 'easy' },
  { id: 'r176', statement: 'Esther was a queen in Persia', isTrue: true, explanation: 'Esther became queen and saved her people', category: 'women', difficulty: 'easy' },
  { id: 'r177', statement: 'Esther risked her life to save the Jews', isTrue: true, explanation: 'Esther approached the king at great risk', category: 'women', difficulty: 'easy' },
  { id: 'r178', statement: 'Mary was the mother of Jesus', isTrue: true, explanation: 'Mary gave birth to Jesus', category: 'women', difficulty: 'easy' },
  { id: 'r179', statement: 'Elizabeth was the mother of John the Baptist', isTrue: true, explanation: 'Elizabeth gave birth to John', category: 'women', difficulty: 'easy' },
  { id: 'r180', statement: 'Mary Magdalene was a follower of Jesus', isTrue: true, explanation: 'Mary Magdalene was one of Jesus\' followers', category: 'women', difficulty: 'easy' },
  { id: 'r181', statement: 'Mary Magdalene was the first to see the risen Jesus', isTrue: true, explanation: 'Mary Magdalene saw Jesus first after the resurrection', category: 'women', difficulty: 'medium' },
  { id: 'r182', statement: 'Martha and Mary were sisters of Lazarus', isTrue: true, explanation: 'Martha and Mary were the sisters of Lazarus', category: 'women', difficulty: 'easy' },
  { id: 'r183', statement: 'Mary anointed Jesus with expensive perfume', isTrue: true, explanation: 'Mary anointed Jesus\' feet', category: 'women', difficulty: 'easy' },
  { id: 'r184', statement: 'Lydia was a seller of purple cloth', isTrue: true, explanation: 'Lydia was a businesswoman from Thyatira', category: 'women', difficulty: 'hard' },
  { id: 'r185', statement: 'Priscilla was a teacher alongside her husband', isTrue: true, explanation: 'Priscilla and Aquila taught Apollos', category: 'women', difficulty: 'hard' },
  { id: 'r186', statement: 'Hannah was the mother of Samuel', isTrue: true, explanation: 'Hannah prayed for a son and gave birth to Samuel', category: 'women', difficulty: 'easy' },
  { id: 'r187', statement: 'Abigail was wise and beautiful', isTrue: true, explanation: 'Abigail prevented David from taking revenge', category: 'women', difficulty: 'medium' },
  { id: 'r188', statement: 'Rahab was a prostitute who helped the spies', isTrue: true, explanation: 'Rahab hid the Israelite spies', category: 'women', difficulty: 'easy' },
  { id: 'r189', statement: 'Jochebed was Moses\' mother', isTrue: true, explanation: 'Jochebed put Moses in a basket to save him', category: 'women', difficulty: 'medium' },
  { id: 'r190', statement: 'The wife of Job encouraged him to curse God', isTrue: true, explanation: 'Job\'s wife told him to "curse God and die"', category: 'women', difficulty: 'hard' },

  // ================================================================
  // SECTION 9: MIRACLES (25 questions)
  // ================================================================
  { id: 'r191', statement: 'Jesus turned water into wine', isTrue: true, explanation: 'This was Jesus\' first miracle', category: 'miracles', difficulty: 'easy' },
  { id: 'r192', statement: 'Jesus walked on water', isTrue: true, explanation: 'Jesus walked on the Sea of Galilee', category: 'miracles', difficulty: 'easy' },
  { id: 'r193', statement: 'Jesus calmed a storm', isTrue: true, explanation: 'Jesus said "Peace, be still"', category: 'miracles', difficulty: 'easy' },
  { id: 'r194', statement: 'Jesus healed a blind man with mud', isTrue: true, explanation: 'Jesus made mud with his spit and healed a blind man', category: 'miracles', difficulty: 'medium' },
  { id: 'r195', statement: 'Jesus healed a leper', isTrue: true, explanation: 'Jesus touched and healed a man with leprosy', category: 'miracles', difficulty: 'easy' },
  { id: 'r196', statement: 'Jesus raised Jairus\'s daughter from the dead', isTrue: true, explanation: 'Jesus raised the young girl back to life', category: 'miracles', difficulty: 'medium' },
  { id: 'r197', statement: 'Jesus raised Lazarus from the dead', isTrue: true, explanation: 'Lazarus was raised after four days in the tomb', category: 'miracles', difficulty: 'easy' },
  { id: 'r198', statement: 'Jesus healed a man with a withered hand', isTrue: true, explanation: 'Jesus healed the man\'s hand on the Sabbath', category: 'miracles', difficulty: 'medium' },
  { id: 'r199', statement: 'Jesus cast out demons', isTrue: true, explanation: 'Jesus cast out many demons during his ministry', category: 'miracles', difficulty: 'easy' },
  { id: 'r200', statement: 'Jesus fed 5,000 with five loaves and two fish', isTrue: true, explanation: 'Jesus multiplied the loaves and fish', category: 'miracles', difficulty: 'easy' },
  { id: 'r201', statement: 'Jesus fed 4,000 with seven loaves and a few fish', isTrue: true, explanation: 'Jesus fed another large crowd', category: 'miracles', difficulty: 'medium' },
  { id: 'r202', statement: 'Jesus walked on water during a storm', isTrue: true, explanation: 'Peter also walked on water briefly', category: 'miracles', difficulty: 'easy' },
  { id: 'r203', statement: 'The sun stood still at Joshua\'s request', isTrue: true, explanation: 'Joshua asked for the sun to stop and it did', category: 'miracles', difficulty: 'hard' },
  { id: 'r204', statement: 'The Red Sea was parted for the Israelites', isTrue: true, explanation: 'Moses parted the Red Sea', category: 'miracles', difficulty: 'easy' },
  { id: 'r205', statement: 'The Jordan River was parted for the Israelites', isTrue: true, explanation: 'The Jordan parted as the Israelites entered Canaan', category: 'miracles', difficulty: 'medium' },
  { id: 'r206', statement: 'Manna fell from heaven in the wilderness', isTrue: true, explanation: 'God provided manna daily', category: 'miracles', difficulty: 'easy' },
  { id: 'r207', statement: 'Water flowed from a rock in the wilderness', isTrue: true, explanation: 'Moses struck the rock and water came out', category: 'miracles', difficulty: 'easy' },
  { id: 'r208', statement: 'Elijah raised a widow\'s son from the dead', isTrue: true, explanation: 'Elijah raised the son in Zarephath', category: 'miracles', difficulty: 'hard' },
  { id: 'r209', statement: 'Elisha healed Naaman of leprosy', isTrue: true, explanation: 'Naaman was healed after washing in the Jordan', category: 'miracles', difficulty: 'medium' },
  { id: 'r210', statement: 'Daniel was saved from the lions', isTrue: true, explanation: 'An angel shut the lions\' mouths', category: 'miracles', difficulty: 'easy' },
  { id: 'r211', statement: 'Shadrach, Meshach, and Abednego survived the fiery furnace', isTrue: true, explanation: 'They were protected in the blazing furnace', category: 'miracles', difficulty: 'easy' },
  { id: 'r212', statement: 'Peter healed a lame man at the temple gate', isTrue: true, explanation: 'The man was healed in Jesus\' name', category: 'miracles', difficulty: 'medium' },
  { id: 'r213', statement: 'Paul was bitten by a snake and survived', isTrue: true, explanation: 'Paul was bitten on Malta and survived', category: 'miracles', difficulty: 'hard' },
  { id: 'r214', statement: 'The apostles performed many miracles', isTrue: true, explanation: 'The apostles continued Jesus\' ministry of miracles', category: 'miracles', difficulty: 'easy' },
  { id: 'r215', statement: 'The veil of the temple was torn at Jesus\' death', isTrue: true, explanation: 'The veil was torn from top to bottom', category: 'miracles', difficulty: 'medium' },

  // ================================================================
  // SECTION 10: PARABLES (20 questions)
  // ================================================================
  { id: 'r216', statement: 'The Parable of the Sower is about different responses to God\'s word', isTrue: true, explanation: 'The seeds represent the word of God', category: 'parables', difficulty: 'medium' },
  { id: 'r217', statement: 'The Parable of the Good Samaritan teaches about loving your neighbor', isTrue: true, explanation: 'The Samaritan showed mercy to the wounded man', category: 'parables', difficulty: 'easy' },
  { id: 'r218', statement: 'The Parable of the Prodigal Son is about God\'s forgiveness', isTrue: true, explanation: 'The father welcomed his wayward son back', category: 'parables', difficulty: 'easy' },
  { id: 'r219', statement: 'The Parable of the Lost Sheep is about finding the lost', isTrue: true, explanation: 'The shepherd left 99 sheep to find one lost sheep', category: 'parables', difficulty: 'easy' },
  { id: 'r220', statement: 'The Parable of the Mustard Seed is about faith', isTrue: true, explanation: 'The smallest seed grows into a large tree', category: 'parables', difficulty: 'easy' },
  { id: 'r221', statement: 'The Parable of the Good Samaritan was told to a lawyer', isTrue: true, explanation: 'A lawyer asked Jesus about eternal life', category: 'parables', difficulty: 'hard' },
  { id: 'r222', statement: 'The Parable of the Ten Virgins is about being prepared', isTrue: true, explanation: 'The wise virgins brought oil for their lamps', category: 'parables', difficulty: 'medium' },
  { id: 'r223', statement: 'The Parable of the Talents is about using God\'s gifts', isTrue: true, explanation: 'The servants were entrusted with talents', category: 'parables', difficulty: 'medium' },
  { id: 'r224', statement: 'The Parable of the Unforgiving Servant is about forgiveness', isTrue: true, explanation: 'The servant refused to forgive a small debt', category: 'parables', difficulty: 'medium' },
  { id: 'r225', statement: 'The Parable of the Persistent Widow is about prayer', isTrue: true, explanation: 'The widow kept asking until she got justice', category: 'parables', difficulty: 'hard' },
  { id: 'r226', statement: 'The Parable of the Pharisee and the Tax Collector is about humility', isTrue: true, explanation: 'The tax collector was justified over the Pharisee', category: 'parables', difficulty: 'medium' },
  { id: 'r227', statement: 'The Parable of the Great Banquet is about God\'s invitation', isTrue: true, explanation: 'Many rejected the invitation to the banquet', category: 'parables', difficulty: 'medium' },
  { id: 'r228', statement: 'The Parable of the Workers in the Vineyard is about God\'s grace', isTrue: true, explanation: 'All workers received the same pay regardless of hours', category: 'parables', difficulty: 'hard' },
  { id: 'r229', statement: 'The Parable of the Hidden Treasure is about the kingdom of heaven', isTrue: true, explanation: 'The man sold everything to buy the field', category: 'parables', difficulty: 'medium' },
  { id: 'r230', statement: 'The Parable of the Pearl of Great Price is about God\'s kingdom', isTrue: true, explanation: 'The merchant sold all to buy the pearl', category: 'parables', difficulty: 'medium' },
  { id: 'r231', statement: 'The Parable of the Net is about the final judgment', isTrue: true, explanation: 'The good fish were kept and the bad were thrown away', category: 'parables', difficulty: 'hard' },
  { id: 'r232', statement: 'Jesus often spoke in parables', isTrue: true, explanation: 'Jesus used parables to teach the crowds', category: 'parables', difficulty: 'easy' },
  { id: 'r233', statement: 'The parables were about the kingdom of God', isTrue: true, explanation: 'Jesus taught about the kingdom through parables', category: 'parables', difficulty: 'easy' },
  { id: 'r234', statement: 'The disciples often asked Jesus to explain the parables', isTrue: true, explanation: 'The disciples asked for explanations of the parables', category: 'parables', difficulty: 'medium' },
  { id: 'r235', statement: 'The Parable of the Sower is explained by Jesus', isTrue: true, explanation: 'Jesus explained the meaning of the sower parable', category: 'parables', difficulty: 'medium' },

  // ================================================================
  // SECTION 11: JESUS (25 questions)
  // ================================================================
  { id: 'r236', statement: 'Jesus was born in Bethlehem', isTrue: true, explanation: 'Jesus was born in Bethlehem as prophesied', category: 'jesus', difficulty: 'easy' },
  { id: 'r237', statement: 'Jesus was raised in Nazareth', isTrue: true, explanation: 'Nazareth was Jesus\' hometown', category: 'jesus', difficulty: 'easy' },
  { id: 'r238', statement: 'Jesus was baptized by John in the Jordan', isTrue: true, explanation: 'John baptized Jesus in the Jordan River', category: 'jesus', difficulty: 'easy' },
  { id: 'r239', statement: 'Jesus was tempted in the wilderness for 40 days', isTrue: true, explanation: 'Jesus fasted and was tempted by Satan', category: 'jesus', difficulty: 'easy' },
  { id: 'r240', statement: 'Jesus chose 12 disciples', isTrue: true, explanation: 'Jesus called twelve men to follow him', category: 'jesus', difficulty: 'easy' },
  { id: 'r241', statement: 'Jesus preached the Sermon on the Mount', isTrue: true, explanation: 'The Sermon on the Mount is recorded in Matthew 5-7', category: 'jesus', difficulty: 'easy' },
  { id: 'r242', statement: 'Jesus said "I am the way, the truth, and the life"', isTrue: true, explanation: 'John 14:6 records this statement', category: 'jesus', difficulty: 'easy' },
  { id: 'r243', statement: 'Jesus said "I am the bread of life"', isTrue: true, explanation: 'Jesus made this statement in John 6', category: 'jesus', difficulty: 'easy' },
  { id: 'r244', statement: 'Jesus said "I am the light of the world"', isTrue: true, explanation: 'John 8:12 records this statement', category: 'jesus', difficulty: 'easy' },
  { id: 'r245', statement: 'Jesus said "I am the good shepherd"', isTrue: true, explanation: 'John 10:11 records this statement', category: 'jesus', difficulty: 'easy' },
  { id: 'r246', statement: 'Jesus said "I am the resurrection and the life"', isTrue: true, explanation: 'John 11:25 records this statement', category: 'jesus', difficulty: 'easy' },
  { id: 'r247', statement: 'Jesus said "I am the vine"', isTrue: true, explanation: 'John 15:5 records this statement', category: 'jesus', difficulty: 'easy' },
  { id: 'r248', statement: 'Jesus was crucified on a cross', isTrue: true, explanation: 'Jesus died by crucifixion on Golgotha', category: 'jesus', difficulty: 'easy' },
  { id: 'r249', statement: 'Jesus rose from the dead on the third day', isTrue: true, explanation: 'Jesus rose on the third day after his crucifixion', category: 'jesus', difficulty: 'easy' },
  { id: 'r250', statement: 'Jesus appeared to many after his resurrection', isTrue: true, explanation: 'Jesus appeared to his disciples and many others', category: 'jesus', difficulty: 'easy' },
  { id: 'r251', statement: 'Jesus ascended to heaven', isTrue: true, explanation: 'Jesus ascended from the Mount of Olives', category: 'jesus', difficulty: 'easy' },
  { id: 'r252', statement: 'Jesus will return again', isTrue: true, explanation: 'Jesus promised to return', category: 'jesus', difficulty: 'easy' },
  { id: 'r253', statement: 'Jesus was without sin', isTrue: true, explanation: 'Jesus lived a sinless life', category: 'jesus', difficulty: 'easy' },
  { id: 'r254', statement: 'Jesus was fully God and fully man', isTrue: true, explanation: 'Jesus had both divine and human natures', category: 'jesus', difficulty: 'medium' },
  { id: 'r255', statement: 'Jesus was born of a virgin', isTrue: true, explanation: 'Mary was a virgin when Jesus was born', category: 'jesus', difficulty: 'easy' },
  { id: 'r256', statement: 'Jesus healed the sick and performed miracles', isTrue: true, explanation: 'Jesus performed many miracles', category: 'jesus', difficulty: 'easy' },
  { id: 'r257', statement: 'Jesus forgave sins', isTrue: true, explanation: 'Jesus forgave the sins of people', category: 'jesus', difficulty: 'easy' },
  { id: 'r258', statement: 'Jesus was called "Immanuel" meaning "God with us"', isTrue: true, explanation: 'Isaiah prophesied this name for the Messiah', category: 'jesus', difficulty: 'medium' },
  { id: 'r259', statement: 'Jesus called God "Father"', isTrue: true, explanation: 'Jesus taught his disciples to call God "Father"', category: 'jesus', difficulty: 'easy' },
  { id: 'r260', statement: 'Jesus prayed often', isTrue: true, explanation: 'Jesus frequently prayed to the Father', category: 'jesus', difficulty: 'easy' },

  // ================================================================
  // SECTION 12: EPISTLES (20 questions)
  // ================================================================
  { id: 'r261', statement: 'Paul wrote Romans', isTrue: true, explanation: 'The Apostle Paul wrote the book of Romans', category: 'epistles', difficulty: 'easy' },
  { id: 'r262', statement: 'Paul wrote 13 letters in the New Testament', isTrue: true, explanation: 'Paul wrote 13 of the New Testament letters', category: 'epistles', difficulty: 'hard' },
  { id: 'r263', statement: 'The book of Hebrews was written by Paul', isTrue: false, explanation: 'The author of Hebrews is unknown', category: 'epistles', difficulty: 'hard' },
  { id: 'r264', statement: 'James was the brother of Jesus', isTrue: true, explanation: 'James was a brother of Jesus', category: 'epistles', difficulty: 'medium' },
  { id: 'r265', statement: 'Jude was also a brother of Jesus', isTrue: true, explanation: 'Jude was another brother of Jesus', category: 'epistles', difficulty: 'medium' },
  { id: 'r266', statement: 'Peter wrote two letters', isTrue: true, explanation: 'Peter wrote 1 and 2 Peter', category: 'epistles', difficulty: 'easy' },
  { id: 'r267', statement: 'John wrote three letters', isTrue: true, explanation: 'John wrote 1, 2, and 3 John', category: 'epistles', difficulty: 'easy' },
  { id: 'r268', statement: 'The book of Hebrews emphasizes the superiority of Christ', isTrue: true, explanation: 'Hebrews shows Christ is better than angels, Moses, and priests', category: 'epistles', difficulty: 'medium' },
  { id: 'r269', statement: 'Romans 8 says there is no condemnation for those in Christ', isTrue: true, explanation: 'Romans 8:1 states this', category: 'epistles', difficulty: 'easy' },
  { id: 'r270', statement: 'The "love chapter" is 1 Corinthians 13', isTrue: true, explanation: '1 Corinthians 13 is the love chapter', category: 'epistles', difficulty: 'easy' },
  { id: 'r271', statement: 'The fruit of the Spirit is found in Galatians 5', isTrue: true, explanation: 'Galatians 5:22-23 lists the fruit of the Spirit', category: 'epistles', difficulty: 'easy' },
  { id: 'r272', statement: 'The armor of God is found in Ephesians 6', isTrue: true, explanation: 'Ephesians 6:10-18 describes the armor of God', category: 'epistles', difficulty: 'easy' },
  { id: 'r273', statement: 'Philippians 4:13 says "I can do all things through Christ"', isTrue: true, explanation: 'Philippians 4:13 is a key verse on strength', category: 'epistles', difficulty: 'easy' },
  { id: 'r274', statement: 'Colossians emphasizes the supremacy of Christ', isTrue: true, explanation: 'Colossians 1:15-20 exalts Christ', category: 'epistles', difficulty: 'medium' },
  { id: 'r275', statement: '1 Thessalonians discusses the second coming', isTrue: true, explanation: 'Paul wrote about the return of Christ', category: 'epistles', difficulty: 'medium' },
  { id: 'r276', statement: 'Paul wrote Timothy and Titus', isTrue: true, explanation: 'These are pastoral epistles from Paul', category: 'epistles', difficulty: 'easy' },
  { id: 'r277', statement: 'The book of Philemon is about a runaway slave', isTrue: true, explanation: 'Philemon was written about Onesimus', category: 'epistles', difficulty: 'medium' },
  { id: 'r278', statement: '2 Timothy was Paul\'s last letter', isTrue: true, explanation: 'Paul wrote 2 Timothy before his death', category: 'epistles', difficulty: 'hard' },
  { id: 'r279', statement: 'Jude is the last of the general epistles', isTrue: true, explanation: 'Jude is the final general epistle', category: 'epistles', difficulty: 'hard' },
  { id: 'r280', statement: 'The epistles are letters to churches or individuals', isTrue: true, explanation: 'The New Testament epistles are letters', category: 'epistles', difficulty: 'easy' },

  // ================================================================
  // SECTION 13: END TIMES & PROPHECY (15 questions)
  // ================================================================
  { id: 'r281', statement: 'Jesus will return again', isTrue: true, explanation: 'Jesus promised to return for his people', category: 'end-times', difficulty: 'easy' },
  { id: 'r282', statement: 'There will be a final judgment', isTrue: true, explanation: 'The Bible teaches a final judgment of all people', category: 'end-times', difficulty: 'easy' },
  { id: 'r283', statement: 'The book of Revelation is about the end times', isTrue: true, explanation: 'Revelation reveals the end times', category: 'end-times', difficulty: 'easy' },
  { id: 'r284', statement: 'The Antichrist is mentioned in the Bible', isTrue: true, explanation: 'The Antichrist appears in 1 John and Revelation', category: 'end-times', difficulty: 'medium' },
  { id: 'r285', statement: 'There will be a new heaven and a new earth', isTrue: true, explanation: 'Revelation 21 describes the new heaven and earth', category: 'end-times', difficulty: 'easy' },
  { id: 'r286', statement: 'The dead will be raised', isTrue: true, explanation: 'There will be a resurrection of the dead', category: 'end-times', difficulty: 'easy' },
  { id: 'r287', statement: 'The rapture is the catching away of believers', isTrue: true, explanation: 'Believers will be caught up to meet the Lord', category: 'end-times', difficulty: 'medium' },
  { id: 'r288', statement: 'The tribulation is a time of great distress', isTrue: true, explanation: 'The tribulation is a future time of trouble', category: 'end-times', difficulty: 'medium' },
  { id: 'r289', statement: 'The millennial kingdom is a 1,000 year reign of Christ', isTrue: true, explanation: 'Revelation 20 describes the millennial reign', category: 'end-times', difficulty: 'hard' },
  { id: 'r290', statement: 'Satan will be defeated in the end', isTrue: true, explanation: 'Satan will be cast into the lake of fire', category: 'end-times', difficulty: 'easy' },
  { id: 'r291', statement: 'Jesus will judge the living and the dead', isTrue: true, explanation: 'Jesus will be the judge of all people', category: 'end-times', difficulty: 'easy' },
  { id: 'r292', statement: 'The New Jerusalem will come down from heaven', isTrue: true, explanation: 'The New Jerusalem descends from heaven', category: 'end-times', difficulty: 'medium' },
  { id: 'r293', statement: 'There will be no more tears or pain in heaven', isTrue: true, explanation: 'Revelation 21:4 says God will wipe away every tear', category: 'end-times', difficulty: 'easy' },
  { id: 'r294', statement: 'The false prophets will be exposed', isTrue: true, explanation: 'False prophets will be judged at the end', category: 'end-times', difficulty: 'medium' },
  { id: 'r295', statement: 'God\'s kingdom will last forever', isTrue: true, explanation: 'God\'s eternal kingdom will never end', category: 'end-times', difficulty: 'easy' },

  // ================================================================
  // SECTION 14: BOOKS & STRUCTURE (20 questions)
  // ================================================================
  { id: 'r296', statement: 'The Bible has 66 books', isTrue: true, explanation: 'The Bible has 39 Old Testament and 27 New Testament books', category: 'books', difficulty: 'easy' },
  { id: 'r297', statement: 'The Old Testament has 39 books', isTrue: true, explanation: 'The Old Testament consists of 39 books', category: 'books', difficulty: 'easy' },
  { id: 'r298', statement: 'The New Testament has 27 books', isTrue: true, explanation: 'The New Testament has 27 books', category: 'books', difficulty: 'easy' },
  { id: 'r299', statement: 'Genesis is the first book of the Bible', isTrue: true, explanation: 'Genesis is the first book', category: 'books', difficulty: 'easy' },
  { id: 'r300', statement: 'Revelation is the last book of the Bible', isTrue: true, explanation: 'Revelation is the final book', category: 'books', difficulty: 'easy' },
  { id: 'r301', statement: 'The book of Psalms is the longest book', isTrue: true, explanation: 'Psalms has 150 chapters', category: 'books', difficulty: 'easy' },
  { id: 'r302', statement: 'Obadiah is the shortest book in the Old Testament', isTrue: true, explanation: 'Obadiah has only 21 verses', category: 'books', difficulty: 'hard' },
  { id: 'r303', statement: '3 John is the shortest book in the Bible', isTrue: true, explanation: '3 John has only 14 verses', category: 'books', difficulty: 'hard' },
  { id: 'r304', statement: 'The book of Proverbs was written by Solomon', isTrue: true, explanation: 'Solomon wrote much of Proverbs', category: 'books', difficulty: 'easy' },
  { id: 'r305', statement: 'The book of Esther does not mention God', isTrue: true, explanation: 'Esther never explicitly mentions God', category: 'books', difficulty: 'hard' },
  { id: 'r306', statement: 'The book of Ruth is about a Moabite woman', isTrue: true, explanation: 'Ruth was a Moabite', category: 'books', difficulty: 'easy' },
  { id: 'r307', statement: 'The book of Jonah is about a prophet who ran from God', isTrue: true, explanation: 'Jonah tried to flee from God\'s call', category: 'books', difficulty: 'easy' },
  { id: 'r308', statement: 'The book of Daniel contains the story of the lion\'s den', isTrue: true, explanation: 'Daniel 6 tells the lion\'s den story', category: 'books', difficulty: 'easy' },
  { id: 'r309', statement: 'The book of Acts was written by Luke', isTrue: true, explanation: 'Luke wrote both the Gospel of Luke and Acts', category: 'books', difficulty: 'medium' },
  { id: 'r310', statement: 'The book of Romans was written by Paul', isTrue: true, explanation: 'Paul wrote Romans', category: 'books', difficulty: 'easy' },
  { id: 'r311', statement: 'The book of Hebrews was written by Paul', isTrue: false, explanation: 'The author of Hebrews is unknown', category: 'books', difficulty: 'hard' },
  { id: 'r312', statement: 'The book of Revelation was written by John', isTrue: true, explanation: 'John wrote Revelation', category: 'books', difficulty: 'easy' },
  { id: 'r313', statement: 'The book of James was written by the brother of Jesus', isTrue: true, explanation: 'James was a brother of Jesus', category: 'books', difficulty: 'medium' },
  { id: 'r314', statement: 'The book of Malachi is the last Old Testament book', isTrue: true, explanation: 'Malachi is the final Old Testament book', category: 'books', difficulty: 'easy' },
  { id: 'r315', statement: 'The book of Matthew is the first New Testament book', isTrue: true, explanation: 'Matthew is the first book of the New Testament', category: 'books', difficulty: 'easy' },

  // ================================================================
  // SECTION 15: MIXED (85 questions)
  // ================================================================
  { id: 'r316', statement: 'The Bible is the best-selling book of all time', isTrue: true, explanation: 'The Bible has sold more copies than any other book', category: 'mixed', difficulty: 'easy' },
  { id: 'r317', statement: 'The Bible was written over 1,500 years', isTrue: true, explanation: 'The Bible was written over approximately 1,500 years', category: 'mixed', difficulty: 'medium' },
  { id: 'r318', statement: 'The Bible was written by about 40 different authors', isTrue: true, explanation: 'The Bible has about 40 different human authors', category: 'mixed', difficulty: 'medium' },
  { id: 'r319', statement: 'The Bible was written in Hebrew, Aramaic, and Greek', isTrue: true, explanation: 'These three languages were used', category: 'mixed', difficulty: 'medium' },
  { id: 'r320', statement: 'The Bible has been translated into thousands of languages', isTrue: true, explanation: 'The Bible is the most translated book', category: 'mixed', difficulty: 'easy' },
  { id: 'r321', statement: 'The "Golden Rule" comes from the Bible', isTrue: true, explanation: '"Do unto others" is from Matthew 7:12', category: 'mixed', difficulty: 'easy' },
  { id: 'r322', statement: 'The Bible was written by one person', isTrue: false, explanation: 'The Bible was written by many authors', category: 'mixed', difficulty: 'easy' },
  { id: 'r323', statement: 'The first Bible was printed by Gutenberg', isTrue: true, explanation: 'Gutenberg printed the first Bible in 1455', category: 'mixed', difficulty: 'hard' },
  { id: 'r324', statement: 'The word "Bible" means "the books"', isTrue: true, explanation: 'The word Bible comes from "biblia" meaning "books"', category: 'mixed', difficulty: 'hard' },
  { id: 'r325', statement: 'The Bible is divided into the Old and New Testaments', isTrue: true, explanation: 'The Bible has two main sections', category: 'mixed', difficulty: 'easy' },
  { id: 'r326', statement: 'The Bible teaches that God is love', isTrue: true, explanation: '1 John 4:8 says "God is love"', category: 'mixed', difficulty: 'easy' },
  { id: 'r327', statement: 'The Bible teaches salvation by works', isTrue: false, explanation: 'The Bible teaches salvation by grace through faith', category: 'mixed', difficulty: 'medium' },
  { id: 'r328', statement: 'The Bible contains the Ten Commandments', isTrue: true, explanation: 'The Ten Commandments are in Exodus 20', category: 'mixed', difficulty: 'easy' },
  { id: 'r329', statement: 'The Bible tells about the resurrection of Jesus', isTrue: true, explanation: 'The resurrection is a central event', category: 'mixed', difficulty: 'easy' },
  { id: 'r330', statement: 'The Bible contains both history and poetry', isTrue: true, explanation: 'The Bible has historical and poetic books', category: 'mixed', difficulty: 'easy' },
  { id: 'r331', statement: 'The Bible has no contradictions', isTrue: false, explanation: 'The Bible has apparent contradictions that can be resolved', category: 'mixed', difficulty: 'hard' },
  { id: 'r332', statement: 'The Bible is relevant for life today', isTrue: true, explanation: 'The Bible provides guidance for all aspects of life', category: 'mixed', difficulty: 'easy' },
  { id: 'r333', statement: 'The Bible teaches that Jesus is the Son of God', isTrue: true, explanation: 'The Bible declares Jesus as the Son of God', category: 'mixed', difficulty: 'easy' },
  { id: 'r334', statement: 'The Bible warns against false prophets', isTrue: true, explanation: 'The Bible warns about false teachers', category: 'mixed', difficulty: 'easy' },
  { id: 'r335', statement: 'The Bible encourages prayer', isTrue: true, explanation: 'The Bible teaches believers to pray', category: 'mixed', difficulty: 'easy' },
  { id: 'r336', statement: 'The Bible teaches us to love God and others', isTrue: true, explanation: 'The great commandment is to love God and neighbor', category: 'mixed', difficulty: 'easy' },
  { id: 'r337', statement: 'The Bible tells us not to be afraid', isTrue: true, explanation: 'The phrase "do not be afraid" appears many times', category: 'mixed', difficulty: 'easy' },
  { id: 'r338', statement: 'The Bible tells stories of heroes and villains', isTrue: true, explanation: 'The Bible contains many character stories', category: 'mixed', difficulty: 'easy' },
  { id: 'r339', statement: 'The Bible uses parables to teach', isTrue: true, explanation: 'Jesus used parables to teach about God\'s kingdom', category: 'mixed', difficulty: 'easy' },
  { id: 'r340', statement: 'The Bible contains many prophecies', isTrue: true, explanation: 'The Bible has many prophetic passages', category: 'mixed', difficulty: 'easy' },
  { id: 'r341', statement: 'The Bible was written on scrolls', isTrue: true, explanation: 'The Bible was originally written on scrolls', category: 'mixed', difficulty: 'easy' },
  { id: 'r342', statement: 'The Bible is used in churches worldwide', isTrue: true, explanation: 'The Bible is used by Christians globally', category: 'mixed', difficulty: 'easy' },
  { id: 'r343', statement: 'The Bible teaches about angels', isTrue: true, explanation: 'The Bible mentions angels many times', category: 'mixed', difficulty: 'easy' },
  { id: 'r344', statement: 'The Bible teaches about demons', isTrue: true, explanation: 'The Bible mentions demons and evil spirits', category: 'mixed', difficulty: 'easy' },
  { id: 'r345', statement: 'The Bible teaches about heaven and hell', isTrue: true, explanation: 'The Bible describes both heaven and hell', category: 'mixed', difficulty: 'easy' },
  { id: 'r346', statement: 'The Bible gives wisdom for daily life', isTrue: true, explanation: 'Proverbs and other books give practical wisdom', category: 'mixed', difficulty: 'easy' },
  { id: 'r347', statement: 'The Bible tells about the creation of the world', isTrue: true, explanation: 'Genesis describes creation', category: 'mixed', difficulty: 'easy' },
  { id: 'r348', statement: 'The Bible tells about the flood', isTrue: true, explanation: 'Genesis 6-9 describes the flood', category: 'mixed', difficulty: 'easy' },
  { id: 'r349', statement: 'The Bible tells about the exodus from Egypt', isTrue: true, explanation: 'Exodus describes the exodus', category: 'mixed', difficulty: 'easy' },
  { id: 'r350', statement: 'The Bible tells about the life of Jesus', isTrue: true, explanation: 'The Gospels tell about Jesus\' life', category: 'mixed', difficulty: 'easy' },
  { id: 'r351', statement: 'The Bible tells about the early church', isTrue: true, explanation: 'Acts describes the early church', category: 'mixed', difficulty: 'easy' },
  { id: 'r352', statement: 'The Bible tells about the end times', isTrue: true, explanation: 'Revelation describes the end times', category: 'mixed', difficulty: 'easy' },
  { id: 'r353', statement: 'The Bible teaches about God\'s love', isTrue: true, explanation: 'The Bible reveals God\'s love for humanity', category: 'mixed', difficulty: 'easy' },
  { id: 'r354', statement: 'The Bible teaches about God\'s judgment', isTrue: true, explanation: 'The Bible speaks of God\'s judgment', category: 'mixed', difficulty: 'easy' },
  { id: 'r355', statement: 'The Bible teaches about God\'s mercy', isTrue: true, explanation: 'The Bible shows God\'s mercy', category: 'mixed', difficulty: 'easy' },
  { id: 'r356', statement: 'The Bible teaches about God\'s grace', isTrue: true, explanation: 'The Bible emphasizes God\'s grace', category: 'mixed', difficulty: 'easy' },
  { id: 'r357', statement: 'The Bible teaches about God\'s faithfulness', isTrue: true, explanation: 'The Bible declares God\'s faithfulness', category: 'mixed', difficulty: 'easy' },
  { id: 'r358', statement: 'The Bible teaches about God\'s power', isTrue: true, explanation: 'The Bible reveals God\'s power', category: 'mixed', difficulty: 'easy' },
  { id: 'r359', statement: 'The Bible teaches about God\'s holiness', isTrue: true, explanation: 'The Bible declares God is holy', category: 'mixed', difficulty: 'easy' },
  { id: 'r360', statement: 'The Bible teaches about God\'s righteousness', isTrue: true, explanation: 'The Bible speaks of God\'s righteousness', category: 'mixed', difficulty: 'easy' },
  { id: 'r361', statement: 'The Bible teaches about God\'s sovereignty', isTrue: true, explanation: 'The Bible shows God is sovereign over all', category: 'mixed', difficulty: 'medium' },
  { id: 'r362', statement: 'The Bible teaches about the Holy Spirit', isTrue: true, explanation: 'The Bible describes the Holy Spirit\'s work', category: 'mixed', difficulty: 'easy' },
  { id: 'r363', statement: 'The Bible teaches about spiritual gifts', isTrue: true, explanation: 'The Bible lists spiritual gifts', category: 'mixed', difficulty: 'easy' },
  { id: 'r364', statement: 'The Bible teaches about baptism', isTrue: true, explanation: 'The Bible mentions baptism', category: 'mixed', difficulty: 'easy' },
  { id: 'r365', statement: 'The Bible teaches about communion', isTrue: true, explanation: 'The Bible describes the Lord\'s Supper', category: 'mixed', difficulty: 'easy' },
  { id: 'r366', statement: 'The Bible teaches about prayer', isTrue: true, explanation: 'The Bible teaches how to pray', category: 'mixed', difficulty: 'easy' },
  { id: 'r367', statement: 'The Bible teaches about fasting', isTrue: true, explanation: 'The Bible mentions fasting', category: 'mixed', difficulty: 'easy' },
  { id: 'r368', statement: 'The Bible teaches about giving', isTrue: true, explanation: 'The Bible teaches about generosity', category: 'mixed', difficulty: 'easy' },
  { id: 'r369', statement: 'The Bible teaches about serving others', isTrue: true, explanation: 'The Bible encourages servanthood', category: 'mixed', difficulty: 'easy' },
  { id: 'r370', statement: 'The Bible teaches about leadership', isTrue: true, explanation: 'The Bible gives principles for leadership', category: 'mixed', difficulty: 'easy' },
  { id: 'r371', statement: 'The Bible teaches about marriage', isTrue: true, explanation: 'The Bible gives guidance for marriage', category: 'mixed', difficulty: 'easy' },
  { id: 'r372', statement: 'The Bible teaches about parenting', isTrue: true, explanation: 'The Bible gives wisdom for parents', category: 'mixed', difficulty: 'easy' },
  { id: 'r373', statement: 'The Bible teaches about friendship', isTrue: true, explanation: 'The Bible speaks about friendship', category: 'mixed', difficulty: 'easy' },
  { id: 'r374', statement: 'The Bible teaches about forgiveness', isTrue: true, explanation: 'The Bible emphasizes forgiveness', category: 'mixed', difficulty: 'easy' },
  { id: 'r375', statement: 'The Bible teaches about humility', isTrue: true, explanation: 'The Bible encourages humility', category: 'mixed', difficulty: 'easy' },
  { id: 'r376', statement: 'The Bible teaches about patience', isTrue: true, explanation: 'The Bible encourages patience', category: 'mixed', difficulty: 'easy' },
  { id: 'r377', statement: 'The Bible teaches about perseverance', isTrue: true, explanation: 'The Bible encourages perseverance', category: 'mixed', difficulty: 'easy' },
  { id: 'r378', statement: 'The Bible teaches about contentment', isTrue: true, explanation: 'The Bible teaches contentment', category: 'mixed', difficulty: 'easy' },
  { id: 'r379', statement: 'The Bible teaches about joy', isTrue: true, explanation: 'The Bible speaks of joy in the Lord', category: 'mixed', difficulty: 'easy' },
  { id: 'r380', statement: 'The Bible teaches about peace', isTrue: true, explanation: 'The Bible speaks of God\'s peace', category: 'mixed', difficulty: 'easy' },
  { id: 'r381', statement: 'The Bible teaches about hope', isTrue: true, explanation: 'The Bible gives hope', category: 'mixed', difficulty: 'easy' },
  { id: 'r382', statement: 'The Bible teaches about faith', isTrue: true, explanation: 'The Bible emphasizes faith', category: 'mixed', difficulty: 'easy' },
  { id: 'r383', statement: 'The Bible teaches about love', isTrue: true, explanation: 'The Bible is all about love', category: 'mixed', difficulty: 'easy' },
  { id: 'r384', statement: 'The Bible teaches about God\'s promises', isTrue: true, explanation: 'The Bible contains many promises', category: 'mixed', difficulty: 'easy' },
  { id: 'r385', statement: 'The Bible teaches about God\'s timing', isTrue: true, explanation: 'The Bible shows God\'s perfect timing', category: 'mixed', difficulty: 'easy' },
  { id: 'r386', statement: 'The Bible teaches about God\'s ways', isTrue: true, explanation: 'The Bible reveals God\'s ways', category: 'mixed', difficulty: 'easy' },
  { id: 'r387', statement: 'The Bible teaches about God\'s thoughts', isTrue: true, explanation: 'The Bible says God\'s thoughts are higher', category: 'mixed', difficulty: 'easy' },
  { id: 'r388', statement: 'The Bible teaches about God\'s wisdom', isTrue: true, explanation: 'The Bible speaks of God\'s wisdom', category: 'mixed', difficulty: 'easy' },
  { id: 'r389', statement: 'The Bible teaches about God\'s knowledge', isTrue: true, explanation: 'The Bible says God knows all things', category: 'mixed', difficulty: 'easy' },
  { id: 'r390', statement: 'The Bible teaches about God\'s presence', isTrue: true, explanation: 'The Bible says God is always with us', category: 'mixed', difficulty: 'easy' },
  { id: 'r391', statement: 'The Bible teaches about God\'s protection', isTrue: true, explanation: 'The Bible speaks of God\'s protection', category: 'mixed', difficulty: 'easy' },
  { id: 'r392', statement: 'The Bible teaches about God\'s provision', isTrue: true, explanation: 'The Bible shows God provides', category: 'mixed', difficulty: 'easy' },
  { id: 'r393', statement: 'The Bible teaches about God\'s guidance', isTrue: true, explanation: 'The Bible gives guidance', category: 'mixed', difficulty: 'easy' },
  { id: 'r394', statement: 'The Bible teaches about God\'s comfort', isTrue: true, explanation: 'The Bible speaks of God\'s comfort', category: 'mixed', difficulty: 'easy' },
  { id: 'r395', statement: 'The Bible teaches about God\'s healing', isTrue: true, explanation: 'The Bible speaks of God\'s healing', category: 'mixed', difficulty: 'easy' },
  { id: 'r396', statement: 'The Bible teaches about God\'s peace', isTrue: true, explanation: 'The Bible speaks of God\'s peace', category: 'mixed', difficulty: 'easy' },
  { id: 'r397', statement: 'The Bible teaches about God\'s joy', isTrue: true, explanation: 'The Bible speaks of joy in God', category: 'mixed', difficulty: 'easy' },
  { id: 'r398', statement: 'The Bible teaches about God\'s hope', isTrue: true, explanation: 'The Bible gives hope in God', category: 'mixed', difficulty: 'easy' },
  { id: 'r399', statement: 'The Bible teaches about God\'s love for all people', isTrue: true, explanation: 'The Bible says God loves everyone', category: 'mixed', difficulty: 'easy' },
  { id: 'r400', statement: 'The Bible is God\'s Word', isTrue: true, explanation: 'The Bible is God\'s revelation to humanity', category: 'mixed', difficulty: 'easy' },
];

// ================================================================
// HELPER FUNCTIONS
// ================================================================

export const getRapidFireQuestions = (count: number = 15): RapidFireQuestion[] => {
  const shuffled = [...rapidFireQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
};

export const getQuestionsByCategory = (category: string): RapidFireQuestion[] => {
  return rapidFireQuestions.filter(q => q.category === category);
};

export const getQuestionsByDifficulty = (difficulty: RapidFireQuestion['difficulty']): RapidFireQuestion[] => {
  return rapidFireQuestions.filter(q => q.difficulty === difficulty);
};

export const getCategories = (): { value: string; label: string; count: number }[] => {
  const categories = [
    'old-testament', 'new-testament', 'characters', 'places', 'books', 'jesus', 
    'apostles', 'miracles', 'prophets', 'law', 'history', 'mixed', 'kings', 
    'judges', 'women', 'parables', 'epistles', 'psalms', 'proverbs', 'angels', 
    'exodus', 'creation', 'covenants', 'feasts', 'worship', 'prayer', 'end-times'
  ];
  return categories.map(cat => ({
    value: cat,
    label: cat.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    count: getQuestionsByCategory(cat).length
  }));
};

export const getDifficulties = (): { value: RapidFireQuestion['difficulty']; label: string }[] => {
  return [
    { value: 'easy', label: 'Easy' },
    { value: 'medium', label: 'Medium' },
    { value: 'hard', label: 'Hard' },
    { value: 'expert', label: 'Expert' }
  ];
};

export const getStats = () => ({
  totalQuestions: rapidFireQuestions.length,
  categories: getCategories().reduce((acc, cat) => {
    acc[cat.value] = cat.count;
    return acc;
  }, {} as Record<string, number>),
  difficulties: {
    easy: getQuestionsByDifficulty('easy').length,
    medium: getQuestionsByDifficulty('medium').length,
    hard: getQuestionsByDifficulty('hard').length,
    expert: getQuestionsByDifficulty('expert').length
  }
});