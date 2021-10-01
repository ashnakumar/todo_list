
class Solution {
public:
  ListNode* reverseList(ListNode* head)
  {
    if (head == NULL) return head;
    ListNode *p = NULL;
    ListNode *c = head;

    ListNode *n = head -> next;

    while (n != NULL) {
      c -> next  = p;
      p = c;
      c = n;
      n = n->next;
    }
    c -> next = p;

    return c;
  }
};