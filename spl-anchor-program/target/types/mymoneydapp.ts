export type Mymoneydapp = {
  "version": "0.2.0",
  "name": "mymoneydapp",
  "instructions": [
    {
      "name": "proxyTransfer",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "from",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "to",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "proxyMintTo",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "to",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "proxyBurn",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "to",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "proxySetAuthority",
      "accounts": [
        {
          "name": "currentAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "accountOrMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "authorityType",
          "type": {
            "defined": "AuthorityType"
          }
        },
        {
          "name": "newAuthority",
          "type": {
            "option": "publicKey"
          }
        }
      ]
    }
  ],
  "types": [
    {
      "name": "AuthorityType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "MintTokens"
          },
          {
            "name": "FreezeAccount"
          },
          {
            "name": "AccountOwner"
          },
          {
            "name": "CloseAccount"
          }
        ]
      }
    }
  ]
};

export const IDL: Mymoneydapp = {
  "version": "0.2.0",
  "name": "mymoneydapp",
  "instructions": [
    {
      "name": "proxyTransfer",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "from",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "to",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "proxyMintTo",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "to",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "proxyBurn",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "to",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "proxySetAuthority",
      "accounts": [
        {
          "name": "currentAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "accountOrMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "authorityType",
          "type": {
            "defined": "AuthorityType"
          }
        },
        {
          "name": "newAuthority",
          "type": {
            "option": "publicKey"
          }
        }
      ]
    }
  ],
  "types": [
    {
      "name": "AuthorityType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "MintTokens"
          },
          {
            "name": "FreezeAccount"
          },
          {
            "name": "AccountOwner"
          },
          {
            "name": "CloseAccount"
          }
        ]
      }
    }
  ]
};
