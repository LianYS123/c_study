from collections import namedtuple
from random import choice

Card = namedtuple('Card', ['rank', 'suit'])
class FDuck():
    ranks = [str(i) for i in range(2, 11)] + list('JQKA')
    suits = 's d c h'.split()
    def __init__(self):
        self.cards = [Card(rank, suit) for rank in self.ranks for suit in self.suits]
    def __len__(self):
        return len(self.cards)
    def __getitem__(self, pos):
        return self.cards[pos]
        
fd = FDuck()
print(len(fd))
print(choice(fd))

suit_values = dict(s = 0, d = 1, c = 2, h = 3)
def spades_high(card):
    rank_value = FDuck.ranks.index(card.rank)
    return rank_value * len(suit_values) + suit_values[card.suit]
res = sorted(fd, key=spades_high)
print(list(res))